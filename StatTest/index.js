function main() {
    $('#calculate').on('click', function () {

        
        let baseSize1 = Number($('#base-size1').val());
        let baseSize2 = Number($('#base-size2').val());

        //get values from textArea in an array
        let percentValues1 = $('#percent-values1').val().split(/\n+/g);
        //check if file has both counts and percents values. If only percent values will return true
        let fileType = false
        if(percentValues1.length > 1) {
            fileType = (percentValues1[0].indexOf('%') < 0 && percentValues1[1].indexOf('%') < 0) ? false : true
        }
        //if the file contains counts and percents remove non-percent entries
        percentValues1 = fileType ? percentValues1.filter(x => x.indexOf('%') !== -1) : percentValues1
        //remove '%' sign in case there are
        percentValues1 = percentValues1.map(x => x.replace(/[^0-9.]/g, ''));
        //remove empty entries after split
        percentValues1 = percentValues1.filter(x => x !== '');
        //divide the number by 100 to have it as percent
        percentValues1 = percentValues1.map(Number).map(x => x / 100);

        
        let percentValues2 = $('#percent-values2').val().split(/\n+/g);
        percentValues2 = fileType ? percentValues2.filter(x => x.indexOf('%') !== -1) : percentValues2
        percentValues2 = percentValues2.map(x => x.replace(/[^0-9.]/g, ''));
        percentValues2 = percentValues2.filter(x => x !== '');
        percentValues2 = percentValues2.map(Number).map(x => x / 100);

        let drivers = $('#drivers').val().split(/\n/g);
        drivers = drivers.filter(x => x !== '');


        
        // confidence level
        let confLevel = $("#confidence-level option:selected").text();
        let confTable = {
            '60%': 0.842,
            '70%': 1.036,
            '80%': 1.282,
            '85%': 1.44,
            '90%': 1.645,
            '95%': 1.96,
            '98%': 2.326,
            '99%': 2.576,
            '99.8%': 3.091,
            '99.9%': 3.291,
        }
        
        errorsChecker()
        
        function errorsChecker() {
            let globalCheck = true

            let base1 = $('#base-size1').removeClass('error')
            let base2 = $('#base-size2').removeClass('error')
            $('#percent-values1').removeClass('error')
            $('#percent-values2').removeClass('error')
            if(baseSize1 === 0) {     
                base1.addClass('error')
                globalCheck = false
                $("table").remove()
                return
            }
            if(baseSize2 === 0) {     
                base2.addClass('error')
                globalCheck = false
                $("table").remove()
                return
            }
            if(percentValues1.length === 0) {
                $('#percent-values1').addClass('error')
                globalCheck = false
                $("table").remove()
                return
            }
            if(percentValues2.length === 0) {
                $('#percent-values2').addClass('error')
                globalCheck = false
                $("table").remove()
                return
            }
            if(percentValues1.length !== percentValues2.length) {
                $("#generatedTable").empty()
                let warning = $('<div>').text("The count of values from the first column is not equal to the second column")
                warning.appendTo("#generatedTable")
                warning.css('color', 'red')
                $('#percent-values1').addClass('error')
                $('#percent-values2').addClass('error')
                $('#percent-values1').val('')
                $('#percent-values2').val('')
                globalCheck = false
                return
            }

            if(globalCheck) {
                createTable()
            }
        }


        function createTable() {
            // remove table if there is one already from previous button click
            $('#generatedTable').empty()

            let table = $('<table>')
                .append($('<tr>')
                    .append($(`<th>Drivers/ Statements</th>`))
                    .append($(`<th>${baseSize1}</th>`))
                    .append($(`<th>${baseSize2}</th>`))
                    .append($(`<th>Result</th>`)))

            for (let i = 0; i < percentValues1.length; i++) {

                let P = ((baseSize1 * percentValues1[i]) + (baseSize2 * percentValues2[i])) / (baseSize1 + baseSize2);
                let Q = 1 - P;
                let Z = Math.abs((percentValues1[i] - percentValues2[i]) / Math.sqrt(P * Q * ((1 / baseSize1) + (1 / baseSize2))))

                let confScore = confTable[confLevel]
                

                if(drivers[i] === undefined) {
                    drivers[i] = '<->'
                }

                let tr = $('<tr>')
                    .append($(`<td>${drivers[i]}</td>`))
                    .append($(`<td>${parseFloat((percentValues1[i] * 100).toFixed(7))}%</td>`))
                    .append($(`<td>${parseFloat((percentValues2[i] * 100).toFixed(7))}%</td>`))
                if (Z > confScore) {
                    if (percentValues1[i] > percentValues2[i]) {
                        tr.append($(`<td class="stat-yes-red"></td>`))
                    } else {
                        tr.append($(`<td class="stat-yes-green"></td>`))
                    }
                } else {
                    tr.append($(`<td class="stat-no"></td>`))
                }
                table.append(tr)
            }

            // fade in animation
            $('#generatedTable').css('display', 'none')
            $('#generatedTable').append(table)
            $('#generatedTable').fadeIn(1500)

            // clear fields at the end
            $('#base-size1').val('')
            $('#base-size2').val('')
            $('#drivers').val('')
            $('#percent-values1').val('')
            $('#percent-values2').val('')

            
            $('table tr:odd').css('background-color', '#9dff002c')
            $('table tr:even').css('background-color', 'white')

            
            // make colorful notification for which confidence level was used
            $('select').addClass('notice')
            setTimeout(function() {
                $('select').removeClass('notice')
            }, 500)
        }
    })


    $('input, textarea').on('focus', function() {
        $(this).addClass('animatedField')
    })
    $('input, textarea').on('blur', function() {
        $(this).removeClass('animatedField')
    })
}

