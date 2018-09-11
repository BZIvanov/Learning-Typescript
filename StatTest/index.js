function main() {
    $('#calculate').on('click', function () {

        
        let baseSize1 = Number($('#base-size1').val());
        let baseSize2 = Number($('#base-size2').val());

        //get values from textArea in an array
        let percentValues1 = $('#percent-values1').val().split(/\n+/g);
        //check if file has both counts and percents values. If only percent values will return true
        let fileType = (percentValues1[1] && percentValues1[0].indexOf('%') < 0 && percentValues1[1].indexOf('%') < 0) ? false : true
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
            '90%': 1.645,
            '95%': 1.96,
            '98%': 2.326,
            '99%': 2.576,
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
            }
            if(baseSize2 === 0) {     
                base2.addClass('error')
                globalCheck = false
            }
            if(percentValues1.length === 0) {
                $('#percent-values1').addClass('error')
                globalCheck = false
            }
            if(percentValues2.length === 0) {
                $('#percent-values2').addClass('error')
                globalCheck = false
            }

            if(globalCheck) {
                createTable()
            }
        }


        function createTable() {
            // remove table if there is one already from previous button click
            $('table').remove()

            let table = $('<table>')
                .append($('<tr>')
                    .append($(`<th>Drivers/ Statements</th>`))
                    .append($(`<th>${baseSize1}</th>`))
                    .append($(`<th>${baseSize2}</th>`))
                    .append($(`<th>Result</th>`)))

            $('#generatedTable').append(table)

            for (let i = 0; i < percentValues1.length; i++) {

                let P = ((baseSize1 * percentValues1[i]) + (baseSize2 * percentValues2[i])) / (baseSize1 + baseSize2);
                let Q = 1 - P;
                let Z = Math.abs((percentValues1[i] - percentValues2[i]) / Math.sqrt(P * Q * ((1 / baseSize1) + (1 / baseSize2))))

                let confScore = confTable[confLevel]


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


                // clear fields at the end
                $('#base-size1').val('')
                $('#base-size2').val('')
                $('#drivers').val('')
                $('#percent-values1').val('')
                $('#percent-values2').val('')
            }
        }
    })
}