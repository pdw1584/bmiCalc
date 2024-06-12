function BMI_calculator(){
    var height = parseInt(document.getElementById('height').value);
    var weight = parseInt(document.getElementById('weight').value);

    var heightToMeter = height / 100;
    var bmi = weight / heightToMeter*heightToMeter;

    var result = document.getElementById('result')
    result.innerText = '당신의 BMI는 ' + bmi.toFixed(2) + ' 입니다.'
};