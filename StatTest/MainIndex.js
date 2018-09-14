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
        let confScore = confTable[confLevel]
        
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
                    let dataFramePercents = fillData()
                    let dataFrameLetters = letterData(dataFramePercents)
                    
                    //filldataFrame()
                    //createTable()
                }
            }
        }
        
        function fillData() {
            let rows = percentValues[0].length
            let cols = numberOfBrands
            
            let dataFrame = []
            for(let row = 0; row < rows; row++) {
                let matrixRow = []
                
                for(let col = 0; col < cols; col++) {
                    matrixRow.push(percentValues[col][row])
                }
                dataFrame.push(matrixRow)
            }
            return dataFrame
        }

        function letterData(matrix) {
            let result = []

            let bases = Array.from(baseSizes)
            let currentRow = matrix[0]
            

            for(let row = 0; row < numberOfBrands; row++) {
                let str = ''
                for(let col = 0; col < numberOfBrands; col++) { 
                    if(row === col) {
                        continue
                    }
                    str += statTest(bases[row], bases[col],currentRow[row], currentRow[col], col)
                }
                result.push(str)
            }
            
            console.log(result)

            function statTest(base1, base2, perc1, perc2, letterForColumn) {
                let P = ((base1 * perc1) + (base2 * perc2)) / (base1 + base2);
                let Q = 1 - P;
                let Z = Math.abs((perc1 - perc2) / Math.sqrt(P * Q * ((1 / base1) + (1 / base2))))
                if (Z > confScore) {
                    if (perc1 > perc2) {
                        return String.fromCharCode(65 + letterForColumn)
                    } else {
                    return ""
                    }
                }
                else {
                    return ""
                }
            }
        }



        // function createTable() {
        //     // remove table if there is one already from previous button click
        //     $('#generatedTable').empty()

        //     let table = $('<table>').append($('<tr>').append($(`<th>Drivers/ Statements</th>`)))
        //     let confScore = confTable[confLevel]

        //     for(let i = 0; i < numberOfBrands; i++) {
        //         table.children().append($(`<th>${baseSizes[i]}</th>`))
        //     }

        //     table.append($('<tr>').append($(`<th>Stat letters</th>`)))
        //     for(let i = 0; i < numberOfBrands; i++) {
        //         $(Array.from(table.children())[1]).append($(`<th>${String.fromCharCode(65 + i)}</th>`))
        //     } 
        
            
        //     for (let i = 0; i < percentValues[0].length; i++) {
        //         if(drivers[i] === undefined) {
        //             drivers[i] = '<->'
        //         }
        //         let tr = $('<tr>').append($(`<td>${drivers[i]}</td>`))      
        //         for (let j = 0; j < numberOfBrands; j++) {
        //             // this if checks to not get out of range after getting index for the next brand
        //             if(i < percentValues[0].length - 1 || percentValues[0].length === 1) {
        //                 let P = ((baseSizes[j] * percentValues[j][i]) + (baseSizes[j+1] * percentValues[j+1][i])) / (baseSizes[j] + baseSizes[j+1]);
        //                 let Q = 1 - P
        //                 let Z = Math.abs((percentValues[j][i] - percentValues[j+1][i]) / Math.sqrt(P * Q * ((1 / baseSizes[i]) + (1 / baseSizes[i+1]))))
                        
        //                 tr.append($(`<td>${parseFloat((percentValues[j][i] * 100).toFixed(7))}%</td>`))
        //             }
        //         }
                
        //         table.append(tr)
        //     }


            // fade in animation
        //     $('#generatedTable').css('display', 'none')
        //     $('#generatedTable').append(table)
        //     $('#generatedTable').fadeIn(1500)

        //     // clear fields at the end
        //     $('input').val('')
        //     $('#drivers').val('')
        //     $('textarea').val('')
            
        //     $('table tr:odd').css('background-color', '#9dff002c')
        //     $('table tr:even').css('background-color', 'white')

        //     // make colorful notification for which confidence level was used
        //     $('select').addClass('notice')
        //     setTimeout(function() {
        //         $('select').removeClass('notice')
        //     }, 500)
        // }
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

