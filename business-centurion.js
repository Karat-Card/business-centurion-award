(function() {
    // Function to create the award widget
    function createWidget() {
        // Get the script tag with data attributes
        var script = document.currentScript;
        var name = script.getAttribute('data-name') || 'Recipient Name';
        var date = script.getAttribute('data-date') || 'Date';

        // Find the target div
        var targetDiv = document.getElementById('awardContainer');
        if (!targetDiv) {
            console.error('Div with id "awardContainer" not found.');
            return;
        }

        // Create a container for the award
        var container = document.createElement('div');
        container.className = 'BusinessCenturionRubyAward1';
        container.style.width = '1080px';
        container.style.height = '1080px';
        container.style.position = 'relative';

        // Set the inner HTML of the container
        container.innerHTML = `
            <div class="Vector" style="width: 296px; height: 296px; left: -108px; top: -108px; position: absolute; background: white"></div>
            <div class="Vector" style="width: 1296px; height: 1296px; left: -108px; top: -108px; position: absolute; background: linear-gradient(90deg, #FF3131 0%, #FE3131 0%, #FD3030 1%, #FB3030 1%, #FA2F2F 2%, #F92F2F 2%, #F82F2F 2%, #F62E2E 3%, #F52E2E 3%, #F42E2E 4%, #F32D2D 4%, #F12D2D 4%, #F02C2C 5%, #EF2C2C 5%, #EE2C2C 5%, #ED2B2B 6%, #EB2B2B 6%, #EA2A2A 7%, #E92A2A 7%, #E82A2A 7%, #E62929 8%, #E52929 8%, #E42929 9%, #E32828 9%, #E22828 9%, #E02727 10%, #DF2727 10%, #DE2727 11%, #DD2626 11%, #DB2626 11%, #DA2525 12%, #D92525 12%, #D82525 12%, #D62424 13%, #D52424 13%, #D42424 14%, #D32323 14%, #D22323 14%, #D02222 15%, #CF2222 15%, #CE2222 16%, #CD2121 16%, #CB2121 16%, #CA2121 17%, #C92020 17%, #C82020 18%, #C71F1F 18%, #C51F1F 18%, #C41F1F 19%, #C31E1E 19%, #C21E1E 20%, #C01D1D 20%, #BF1D1D 20%, #BE1D1D 21%, #BD1C1C 21%, #BC1C1C 21%, #BA1C1C 22%, #B91B1B 22%, #B81B1B 23%, #B71A1A 23%, #B51A1A 23%, #B41919 24%, #B31919 24%, #B21919 25%, #B01818 25%, #AF1818 25%, #AE1818 26%, #AD1717 26%, #AC1717 27%, #AA1717 27%, #A91616 27%, #A81616 28%, #A71515 28%, #A51515 29%, #A41414 29%, #A31414 29%, #A21414 30%, #A11414 30%, #9F1313 30%, #9E1313 30%, #9D1212 31%, #9C1212 32%, #9A1212 32%, #991111 32%, #981111 33%, #971010 33%, #951010 34%, #941010 34%, #930F0F 34%, #920F0F 35%, #910F0F 35%, #8F0E0E 36%, #8E0E0E 36%, #8D0D0D 36%, #8C0D0D 37%, #8A0D0D 37%, #890C0C 37%, #880C0C 38%, #870B0B 38%, #860B0B 39%, #840B0B 39%, #830A0A 39%, #820A0A 40%, #810A0A 40%, #7F0909 41%, #7E0909 41%, #7D0808 41%, #7C0808 42%, #7A0808 42%, #790707 43%, #780707 43%, #770606 43%, #760606 44%, #740606 44%, #730505 45%, #720505 45%, #710505 45%, #6F0404 46%, #6E0404 46%, #6D0303 46%, #6C0303 47%, #6B0303 47%, #690202 48%, #680202 48%, #670202 48%, #660101 49%, #640101 49%, #630000 50%, #620000 50%, #630000 50%, #640000 51%, #660000 51%, #670000 52%, #680000 52%, #690000 52%, #6B00000000 53%, #6C0000 53%, #6D0000 54%, #6E0000 54%, #6F0000 54%, #710000 55%, #720000 55%, #730000 55%, #740000 56%, #760000 56%, #770000 57%, #780000 57%, #790000 57%, #7A0000 58%, #7C0000 58%, #7D0000 59%, #7E0000 59%, #7F0000 59%, #810000 60%, #820000 60%, #830000 61%, #840000 61%, #860000 61%, #870000 62%, #880000 62%, #890000 62%, #8A0000 63%, #8C0000 63%, #8D0000 64%, #8E0000 64%, #8F0000 64%, #910000 65%, #920000 65%, #930000 66%, #940000 66%, #950000 66%, #970000 67%, #980000 67%, #990000 68%, #9A0000 68%, #9C0000 68%, #9D0000 69%, #9E0000 69%, #9F0000 70%, #A10000 70%, #A20000 70%, #A30000 71%, #A40000 71%, #A50000 71%, #A70000 72%, #A80000 72%, #A90000 73%, #AA0000 73%, #AC0000 73%, #AD0000 74%, #AE0000 74%, #AF0000 75%, #B00000 75%, #B20000 75%, #B30000 76%, #B40000 76%, #B50000 77%, #B70000 77%, #B80000 77%, #B90000 78%, #BA0000 78%, #BC0000 79%, #BD0000 79%, #BE0000 79%, #BF0000 80%, #C00000 80%, #C20000 80%, #C30000 81%, #C40000 81%, #C50000 82%, #C70000 82%, #C80000 82%, #C90000 83%, #CA0000 83%, #CB0000 84%, #CD0000 84%, #CE0000 84%, #CF0000 85%, #D00000 85%, #D20000 86%, #D30000 86%, #D40000 86%, #D50000 87%, #D60000 87%, #D80000 87%, #D90000 88%, #DA0000 88%, #DB0000 89%, #DD0000 89%, #DE0000 89%, #DF0000 90%, #E00000 90%, #E20000 91%, #E30000 91%, #E40000 91%, #E50000 92%, #E60000 92%, #E80000 93%, #E90000 93%, #EA0000 93%, #EB0000 94%, #ED0000 94%, #EE0000 95%, #EF0000 95%, #F00000 95%, #F10000 96%, #F30000 96%, #F40000 96%, #F50000 97%, #F60000 97%, #F80000 98%, #F90000 98%, #FA0000 99%, #FB0000 99%, #FD0000 99%, #FE0000 100%, #FF0000 100%)"></div>
            <div class="MaskGroup" style="width: 1296px; height: 1296px; left: -108px; top: -108px; position: absolute">
                <div class="Vector" style="width: 1296px; height: 1296px; left: 0px; top: 0px; position: absolute; background: rgba(0, 0, 0, 0.62)"></div>
                <div class="ClipPathGroup" style="width: 866.67px; height: 866.67px; left: 214.67px; top: 214.67px; position: absolute">
                    <div class="Vector" style="width: 866.67px; height: 866.67px; left: 0px; top: 0px; position: absolute; background: black"></div>
                    <div class="Vector" style="width: 864px; height: 864px; left: 1.33px; top: 1.33px; position: absolute; background: #FF5959"></div>
                </div>
            </div>
            <div class="BusinessCenturion" style="width: 697px; height: 200px; left: 190px; top: 640px; position: absolute; text-align: center; color: gold; font-size: 96px; font-family: Kameron; font-weight: 700; line-height: 103.86px; word-wrap: break-word; text-shadow: 0 0 10px rgba(212, 175, 55, 0.75);">Business<br/>Centurion</div>
            <div class="RubyAward" style="width:317px; height: 69px; left: 383px; top: 885px; position: absolute; text-align: center; color: gold; font-size: 32px; font-family: Kameron; font-weight: 700; word-wrap: break-word; text-shadow: 0 0 10px rgba(212, 175, 55, 0.75);">RUBY AWARD</div>
            <img src="https://vashong.github.io/widgets/award/digital%20awards/Business%20Centurion%20Gold.png" style="width: 50%; position: relative; top: 100px; left: 25%; transform: translateY(-35%);">
            <div style="position: absolute; top: 600px; left: 50%; transform: translateX(-50%); text-align: center; color: white; font-size: 24px; font-family: Arial, sans-serif;">
                <div>${name}</div>
                <div>${date}</div>
            </div>
        `;

        // Append the container to the target div
        targetDiv.appendChild(container);
    }

    // Create the widget when the DOM is fully loaded
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        createWidget();
    } else {
        document.addEventListener('DOMContentLoaded', createWidget);
    }
})();
