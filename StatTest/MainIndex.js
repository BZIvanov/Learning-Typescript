function main() {
    $('#calculate').on('click', function () {

        let numberOfBrands = $('#base-sizes-area').children().toArray().length
        let baseSizes = []
        let percentValues = []


        let typeOfFile = false
        for(let i = 1; i <= numberOfBrands; i++) {
            baseSizes.push(Number($(`#base-size${i}`).val()))
            let percents = $(`#percent-values${i}`).val().split(/\n+/g)

            if(percents.length > 1 && i == 1) {
                typeOfFile = (percents[0].indexOf('%') < 0 && percents[1].indexOf('%') < 0) ? false : true
            }
            percents = typeOfFile ? percents.filter(x => x.indexOf('%') !== -1) : percents

            percents = percents.map(x => x.replace(/[^0-9.]/g, ''));
            percents = percents.filter(x => x !== '');
            percents = percents.map(Number).map(x => x / 100);
            percentValues.push(percents)
        }

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

        
        //-----------------------------------------
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

        

        //-------------------------------------------------
        
        
        
        errorsChecker()
        
        function errorsChecker() {
            let globalCheck = true

            for(let i = 0; i < numberOfBrands; i++) {
                $(`#base-size${i+1}`).removeClass('error')
                $(`#percent-values${i+1}`).removeClass('error')

                if(baseSizes[i] === 0) {     
                    $(`#base-size${i+1}`).addClass('error')
                    globalCheck = false
                    $("table").remove()
                    return
                }
                if(percentValues[i].length === 0) {
                    $(`#percent-values${i+1}`).addClass('error')
                    globalCheck = false
                    $("table").remove()
                    return
                }
                if(percentValues[0].length !== percentValues[i].length) {
                    $("#generatedTable").empty()
                    let warning = $('<div>').text("The count of values is different for the columns")
                    warning.appendTo("#generatedTable")
                    warning.css('color', 'red')
                    $(`#percent-values${i+1}`).addClass('error')
                    $(`#percent-values${i+1}`).val('')
                    globalCheck = false
                    return
                }

                if(globalCheck && i === numberOfBrands - 1) {
                    createTable()
                }
            }
        }


        function createTable() {
            // remove table if there is one already from previous button click
            $('#generatedTable').empty()

            let table = $('<table>').append($('<tr>').append($(`<th>Drivers/ Statements</th>`)))

            for(let i = 0; i < numberOfBrands; i++) {
                table.children().append($(`<th>${baseSizes[i]}</th>`))
            }

            table.append($('<tr>').append($(`<th>Stat letters</th>`)))
            for(let i = 0; i < numberOfBrands; i++) {
                $(Array.from(table.children())[1]).append($(`<th>${String.fromCharCode(65 + i)}</th>`))
            } 
            
            
            for (let i = 0; i < percentValues[0].length; i++) {
                if(drivers[i] === undefined) {
                    drivers[i] = '<->'
                }
                let tr = $('<tr>').append($(`<td>${drivers[i]}</td>`))

                
                for (let j = 0; j < numberOfBrands; j++) {

                    if(i < percentValues[0].length - 1) {
                        
                    }
                    let P = ((baseSizes[i] * percentValues[j][i]) + (baseSizes[i+1] * percentValues[j+1][i])) / (baseSizes[i] + baseSizes[i+1]);
                    let Q = 1 - P;
                    let Z = Math.abs((percentValues[j][i] - percentValues[j+1][i]) / Math.sqrt(P * Q * ((1 / baseSizes[i]) + (1 / baseSizes[i+1]))))



                    tr.append($(`<td>${percentValues[j][i]}</td>`))

                    
                }
                
                table.append(tr)
            }


            // for (let i = 0; i < percentValues1.length; i++) {

            //     let P = ((baseSize1 * percentValues1[i]) + (baseSize2 * percentValues2[i])) / (baseSize1 + baseSize2);
            //     let Q = 1 - P;
            //     let Z = Math.abs((percentValues1[i] - percentValues2[i]) / Math.sqrt(P * Q * ((1 / baseSize1) + (1 / baseSize2))))

            //     let confScore = confTable[confLevel]
                

            //     if(drivers[i] === undefined) {
            //         drivers[i] = '<->'
            //     }

            //     let tr = $('<tr>')
            //         .append($(`<td>${drivers[i]}</td>`))
            //         .append($(`<td>${parseFloat((percentValues1[i] * 100).toFixed(7))}%</td>`))
            //         .append($(`<td>${parseFloat((percentValues2[i] * 100).toFixed(7))}%</td>`))
            //     if (Z > confScore) {
            //         if (percentValues1[i] > percentValues2[i]) {
            //             tr.append($(`<td class="stat-yes-red"></td>`))
            //         } else {
            //             tr.append($(`<td class="stat-yes-green"></td>`))
            //         }
            //     } else {
            //         tr.append($(`<td class="stat-no"></td>`))
            //     }
            //     table.append(tr)
            // }

            // fade in animation
            $('#generatedTable').css('display', 'none')
            $('#generatedTable').append(table)
            $('#generatedTable').fadeIn(1500)

            // clear fields at the end
            $('input').val('')
            $('#drivers').val('')
            $('textarea').val('')
            
            $('table tr:odd').css('background-color', '#9dff002c')
            $('table tr:even').css('background-color', 'white')
        }
    })



    function animateFields() {
        $('input, textarea').on('focus', function() {
            $(this).addClass('animatedField')
        })
        $('input, textarea').on('blur', function() {
            $(this).removeClass('animatedField')
        })
    } 
    animateFields()



    let addMoreFields = (function () {
        let count = 2
        return function() {
            count++
            $('#base-sizes-area').append(`<input type="text" id="base-size${count}" placeholder="Base size ${count}"></input>`)
            $('#percent-values-area').append(`<textarea id="percent-values${count}" cols="20" rows="2" placeholder="Percent value/ values ${count}"></textarea>`)
            animateFields()
        }
    })()

    $('#addMore').on('click', addMoreFields)
}

