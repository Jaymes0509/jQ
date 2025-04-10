// 10. 如果是這樣寫的話，有錯誤訊息，為什麼？
// 因為元素還沒有準備好，所以無法取得元素的值
// btnGet.onclick = function () {
//     console.log("OK");
// }











































































// 11. 畫面準備好以後才開始執行
$(document).ready(function () {
    btnGet.onclick = function () {

        // 20. 取得 姓名欄位 (使用 JavaScript 的方式)
        // 21. 取得 姓名欄位 (使用 jQuery 的方式)
        // let js1 = document.getElementById("userName").value;
        // let jq1 = $('#userName').prop('value');
        // console.log(  '姓名A:'  +  js1 );
        // console.log(  '姓名B:'  +  jq1 );

        // 30. 取得 地址欄位 (使用 JavaScript 的方式)
        // 31. 取得 地址欄位 (使用 jQuery 的方式)
        // let js2 = document.getElementById('address').value;
        // let jq2 = $('#address').prop('value');
        // console.log(`  地址A ${js2}   `);
        // console.log(`  地址B ${jq2}   `);

        // 40. 取得 年紀欄位 (使用 JavaScript 的方式)
        // 1. 我想要取得 "全部" 跟年紀有關的 input
        // 2. 一個一個確認 有沒有被點選 ( checked )
        // 3. 如果有被點選的話，想看 主控台 看見 value 屬性的值
        // 4. 如果沒有被點選, 就不顯示
        let xa = document.getElementsByName('age');
        // console.log(xa);  // NodeList(4) [input, input, input, input]
        // console.log(  xa[0].checked ); 
        // console.log(  xa[1]  ); 
        // console.log(  xa[2]  ); 
        // console.log(  xa[3]  ); 

        // for(宣告變數並且給值; 變數條件; 變數改變的方式){}
        for(let k = 0; k <= 3; k++){
           // console.log(  xa[k].checked );
           if(  xa[k].checked == true  ){
               console.log(  xa[k].value  );
           }
            }

        // 41. 取得 年紀欄位 (使用 jQuery 的方式)
        // :  虛擬 類別
        // :: 虛擬 元素
        let jq3 = $('input[name="age"]:checked').prop('value')
        console.log('最後一個:' + jq3);
    }
});

