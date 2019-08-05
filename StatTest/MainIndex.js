function main() {
    $('#calculate').on('click', function () {
        // check if all is pasted in the first field
        let wherePasted = $(`#base-size1`).val().split(/\t+/g).length

        let numberOfBrands
        let baseSizes = []
        let percentValues = []
        let typeOfFile = false
        if(wherePasted === 1) {
            numberOfBrands = $('#base-sizes-area').children().toArray().length
            
            for(let i = 1; i <= numberOfBrands; i++) {
                baseSizes.push(Number($(`#base-size${i}`).val().replace(/\*+/g, '')))
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
        } else {
            numberOfBrands = $(`#base-size1`).val().split(/\t/g).length
            baseSizes = $(`#base-size1`).val().split(/\t/g).map(a => a.replace(/\*+/g, '')).map(Number)
            
            // transpose logic below because the data from only one field is obtained in another way
            let itterationsNeeded = $(`#percent-values1`).val().split(/\n+/g).filter(x => x !== '').length
            let tempMatrix = $(`#percent-values1`).val().split(/\n+/g).filter(x => x !== '').map(z => z.split(/\t+/g))
            let transposed = []
            for(let i = 0; i < numberOfBrands; i++) {
                let temp = []
                for(let j = 0; j < itterationsNeeded; j++) {
                    temp.push(tempMatrix[j][i])
                }
                transposed.push(temp)
            }
            transposed = transposed.map(a => a.map(b => 
                { if(b === undefined) {
                    return b = ''
                } else {
                    return b
                }
            }))

            for(let i = 0; i < numberOfBrands; i++) {
                let percents = transposed[i]
                console.log(percents)
                if(percents.length > 1 && i == 0) {
                    typeOfFile = (percents[0].indexOf('%') < 0 && percents[1].indexOf('%') < 0) ? false : true
                }
                percents = typeOfFile ? percents.filter(x => x.indexOf('%') !== -1) : percents
    
                // replace '-' with -1
                percents = percents.map(x => {

                    // x = x.trim();
                    // if (x === '-') {
                    //     return -1;
                    // }
                    return x;
                });
                percents = percents.map(x => x.replace(/[^0-9.\-]/g, ''));
                percents = percents.filter(x => x !== '');
                percents = percents.map(Number).map(x => x / 100);
                percentValues.push(percents)
            }
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
            if(wherePasted === 1) {
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
                        createTable(dataFramePercents, dataFrameLetters)
                    }
                }
            } else {
                let dataFramePercents = fillData()
                let dataFrameLetters = letterData(dataFramePercents)
                createTable(dataFramePercents, dataFrameLetters)
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
            let allLettersMatrix = []
            let bases = Array.from(baseSizes)
            
            for(let i = 0; i < percentValues[0].length; i++) {
                let currentRow = matrix[i]
                let result = []

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
                allLettersMatrix.push(result)
            }

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

            return allLettersMatrix
        }


        function createTable(percentData, letterData) {
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
                let tr = $('<tr>').append($(`<td>${drivers[i]}</td>`)).addClass('stat-values')  
                for (let j = 0; j < numberOfBrands; j++) {   
                    tr.append($(`<td>${parseFloat((percentData[i][j] * 100).toFixed(7))}%
                        ${letterData[i][j]}</td>`))
                }
                table.append(tr)
            }


            // fade in animation
            $('#generatedTable').css('display', 'none')
            $('#generatedTable').append(table)
            $('#generatedTable').fadeIn(1500)

            // clear fields at the end
            $('input').val('')
            $('#drivers').val('')
            $('textarea').val('')
            
            $('table tr:odd').css('background-color', '#eeeeee')
            $('table tr:even').css('background-color', 'white')

            // make colorful notification for which confidence level was used
            $('select').addClass('notice')
            setTimeout(function() {
                $('select').removeClass('notice')
            }, 500)

            hoverTable()

            // mark low base sizes
            let baseSizeRowTD = $('table tr:eq(0)').children().toArray()
            for(let st = 1; st < baseSizeRowTD.length; st++) {
                let currBase = baseSizeRowTD[st].textContent
                if (currBase < 30) {
                    $(baseSizeRowTD[st]).append(`<span class="low-base">**</span>`)
                } else if (currBase < 50) {
                    $(baseSizeRowTD[st]).append(`<span class="low-base">*</span>`)
                } else {
                    continue
                }
            }
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


    // add hover events to visualize stat test
    function hoverTable() {
        $('.stat-values td').on('mouseover', function() {
            let indexOfTD = $(this).index()
            if(indexOfTD === 0) {
                return
            }

            // green letters logic
            let numberOfTD = $('table tr:first').children().length
            let numberOfColumn = $('.stat-values td').index(this) % numberOfTD
            let letterForColumn = $($('table').find(`tr:eq(1)`).children().toArray()[numberOfColumn]).text()
            $(this).parent().find(`td:contains(${letterForColumn})`).addClass('sigDiffOthersGreen')
            $(this).parent().find('td:first').removeClass('sigDiffOthersGreen')


            $(this).addClass('sigDiffThis')

            //red letters logic
            let lettersInTD = $(this).text().replace(/[^A-Z]+/, "").split("").filter(x => x !== '')
            lettersInTD.forEach(x => {
                let letterToNumber = x.charCodeAt() - 64
                $(this).parent().find(`td:eq(${letterToNumber})`).addClass('sigDiffOthersRed')
                $(this).parent().find('td:first').removeClass('sigDiffOthersRed')
            })
            
        })

        $('.stat-values td').on('mouseout', function() {
            $('table td').removeClass('sigDiffOthersGreen')
            $(this).removeClass('sigDiffThis')
            $(this).parent().find('td').removeClass('sigDiffOthersRed')
        })
    }
}

