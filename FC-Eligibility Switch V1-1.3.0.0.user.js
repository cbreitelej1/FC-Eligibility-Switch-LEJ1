// ==UserScript==
// @name         FC-Eligibility Switch LEJ1
// @version      1.3.0.0
// @author       cbreite
// @match        https://fc-eligibility-website-dub.aka.amazon.com/*
// @grant        none
// @updateURL    https://github.com/cbreitelej1/FC-Eligibility-Switch-LEJ1/raw/refs/heads/main/FC-Eligibility%20Switch%20V1-1.3.0.0.user.js
// @downloadURL  https://github.com/cbreitelej1/FC-Eligibility-Switch-LEJ1/raw/refs/heads/main/FC-Eligibility%20Switch%20V1-1.3.0.0.user.js
// require      http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js
// https://fc-eligibility-website-dub.aka.amazon.com/#/picker-eligibilities/LEJ1
// https://fc-eligibility-website-dub.aka.amazon.com/#/cluster-eligibilities/LEJ1
// ==/UserScript==
// <begin>Tomasz Niszczak @niszct POZ1
// zum einfÃƒÂ¼gen mehrerer Login
function OnWebUpdate() {
    var IntervalID = setTimeout( function() {
        var TargetInput = $( 'input[ng-model="pickerCtrl.currentPicker"]' );
        if ( TargetInput.size() <= 0 ) {
            return;
        }
        TargetInput.on( 'keypress', function( Event ) {
            if ( Event.which != 13 ) {
                return;
            }
            var Data = this.value.trim().split( ' ' );
            var SourceInput = $( this );
            if ( /(,)/g.test( this.value ) ) {
                return;
            }
            var Button = $( 'button', SourceInput.parent() );
            Event.preventDefault();
            Data.forEach( function( Value ) {
                if ( Value.length == 0 ) {
                    return;
                }
                SourceInput.val( Value ).change();
                Button.click();
            } );
        } );
        clearInterval( IntervalID );
    }, 1000 );
}
$( window ).bind( 'hashchange', function() {
    OnWebUpdate();
});
OnWebUpdate();
//</end>Tomasz Niszczak @niszct POZ1
//**************************************
//*** Erweiterung: fbergma 2019 Lej1 ***
//*** UPDATE: mconrad  28/4/2022 Lej1 **
//***UPDATE: nzimmerm 01/24/2023 Lej1***
//**************************************
//var $ = window.jQuery;

//Buttons erstellen

var input=document.createElement("input");
input.type="button";
input.value="NonConByPass";
input.onclick = PickZoneUmstellen;
input.setAttribute("style", "font-size:18px;background:#87CEFA;position:absolute;top:60px;right:15px;width:150px;");
document.body.appendChild(input);
var input3=document.createElement("input");
input3.type="button";
input3.value="ExceptionPT";
input3.onclick = EXPTUmstellen;
input3.setAttribute("style", "font-size:18px;background:#87CEFA;position:absolute;top:95px;right:15px;width:150px;");
document.body.appendChild(input3);
var input4=document.createElement("input");
input4.type="button";
input4.value="XLarge_H3";
input4.onclick = PUP_XL_umstellen;
input4.setAttribute("style", "font-size:18px;background:#FFC1C1;position:absolute;top:165px;right:170px;width:150px;");
document.body.appendChild(input4);
var input5=document.createElement("input");
input5.type="button";
input5.value="NonConPUP";
input5.onclick = PUP_NC_umstellen;
input5.setAttribute("style", "font-size:18px;background:#FFC1C1;position:absolute;top:95px;right:170px;width:150px;");
document.body.appendChild(input5);
var input6=document.createElement("input");
input6.type="button";
input6.value="ExceptionPUP";
input6.onclick = PUP_NCe_umstellen;
input6.setAttribute("style", "font-size:18px;background:#FFC1C1;position:absolute;top:130px;right:170px;width:150px;");
document.body.appendChild(input6);
var input7=document.createElement("input");
input7.type="button";
input7.value="DamageSingle";
input7.onclick = DamageSingleUmstellen;
input7.setAttribute("style", "font-size:18px;background:#FFDAB9;position:absolute;top:60px;right:1400px;width:150px;");
document.body.appendChild(input7);
var input8=document.createElement("input");
input8.type="button";
input8.value="OverstockLTL";
input8.onclick = FracsOverstockUmstellen;
input8.setAttribute("style", "font-size:18px;background:#FFDAB9;position:absolute;top:60px;right:1250px;width:150px;");
document.body.appendChild(input8);
var input9=document.createElement("input");
input9.type="button";
input9.value="SiocNonCon";
input9.onclick = SiocNonConUmstellen;
input9.setAttribute("style", "font-size:18px;background:#FFC1C1;position:absolute;top:200px;right:170px;width:150px;");
document.body.appendChild(input9);
var input10=document.createElement("input");
input10.type="button";
input10.value="FracsRemove";
input10.onclick = FracsRemoveUmstellen;
input10.setAttribute("style", "font-size:18px;background:#FFDAB9;position:absolute;top:60px;right:1100px;width:150px;");
document.body.appendChild(input10);
var input11=document.createElement("input");
input11.type="button";
input11.value="HOV";
input11.onclick = HOVUmstellen;
input11.setAttribute("style", "font-size:18px;background:#FFC1C1;position:absolute;top:60px;right:170px;width:150px;");
document.body.appendChild(input11);
var input13=document.createElement("input");
input13.type="button";
input13.value="NonConPT";
input13.onclick = NCPTUmstellen;
input13.setAttribute("style", "font-size:18px;background:#87CEFA;position:absolute;top:130px;right:15px;width:150px;");
document.body.appendChild(input13);
// var input14=document.createElement("input");
// input14.type="button";
// input14.value="HotPicks_H1";
// input14.onclick = hotpicksh1Umstellen;
// input14.setAttribute("style", "font-size:18px;background:#FA5858;position:absolute;top:60px;right:350px;width:150px;");
// document.body.appendChild(input14);
// var input15=document.createElement("input");
// input15.type="button";
// input15.value="QA_Pick_H1";
// input15.onclick = rejectsh1Umstellen;
// input15.setAttribute("style", "font-size:18px;background:#FA5858;position:absolute;top:60px;right:200px;width:150px;");
// document.body.appendChild(input15);
var input16=document.createElement("input");
input16.type="button";
input16.value="XLarge_H1";
input16.onclick = PUP_XL_H1umstellen;
input16.setAttribute("style", "font-size:18px;background:#87CEFA;position:absolute;top:165px;right:15px;width:150px;");
document.body.appendChild(input16);
var input17=document.createElement("input");
input17.type="button";
input17.value="TransPick";
input17.onclick = TransPicking_umstellen;
input17.setAttribute("style", "font-size:18px;background:#87CEFA;position:absolute;top:200px;right:15px;width:150px;");
document.body.appendChild(input17);
var input18=document.createElement("input");
input18.type="button";
input18.value="DamageMulti";
input18.onclick = DamageMultiUmstellen;
input18.setAttribute("style", "font-size:18px;background:#FFDAB9;position:absolute;top:95px;right:1400px;width:150px;");
document.body.appendChild(input18);
var input19=document.createElement("input");
input19.type="button";
input19.value="FracsDonate";
input19.onclick = FracsDonateUmstellen;
input19.setAttribute("style", "font-size:18px;background:#FFDAB9;position:absolute;top:60px;right:950px;width:150px;");
document.body.appendChild(input19);
// var input20=document.createElement("input");
// input20.type="button";
// input20.value="ProbSolv_Pick_H1";
// input20.onclick = ProbSolv1Umstellen;
// input20.setAttribute("style", "font-size:18px;background:#FA5858;position:absolute;top:60px;right:50px;width:150px;");
// document.body.appendChild(input20);
var input21=document.createElement("input");
input21.type="button";
input21.value="DamageLTL";
input21.onclick = DamageLTLUmstellen;
input21.setAttribute("style", "font-size:18px;background:#FFDAB9;position:absolute;top:95px;right:1250px;width:150px;");
document.body.appendChild(input21);
var input22=document.createElement("input");
input22.type="button";
input22.value="Overstock+DamageLTL";
input22.onclick = DamageLTLOverstockLTLUmstellen;
input22.setAttribute("style", "font-size:18px;background:#FFDAB9;position:absolute;top:95px;right:1040px;width:210px;");
document.body.appendChild(input22);

// jeweiligen Funktionen zu den Buttons

function PickZoneUmstellen(){
if ('https://fc-eligibility-website-dub.aka.amazon.com/#/picker-eligibilities/LEJ1'==window.location.href) {
//Picker Eligibilities umstellen
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); // removeAllPickerEligibilities
$("a:contains('NonConByPassPicking')").click();
$("a:contains('NonMoveablePicker')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
} else if ('https://fc-eligibility-website-dub.aka.amazon.com/#/cluster-eligibilities/LEJ1'==window.location.href) {
// Cluster Eligibilities umstellen
//$("a:contains('Cluster Eligibilities')").click(); // Webseitenwechsel -> ClusterEligibilities
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); // remove cluster egi
$("a:contains('H1-All')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
} else {
alert ('Fehler: falsche Webseite wird angesteuert!');
}
}
function HOVUmstellen(){
if ('https://fc-eligibility-website-dub.aka.amazon.com/#/picker-eligibilities/LEJ1'==window.location.href) {
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); // removeAllPickerEligibilities
$("a:contains('HOVNonConPicking')").click();
$("a:contains('NonConHOVExceptionPicking')").click();
$("a:contains('NonMoveablePicker')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
} else if ('https://fc-eligibility-website-dub.aka.amazon.com/#/cluster-eligibilities/LEJ1'==window.location.href) {
//Cluster
//$("a:contains('Cluster Eligibilities')").click();
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); //remove cluster egi
$("a:contains('Schubmast')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
}
}
function PUP_XL_umstellen(){
if ('https://fc-eligibility-website-dub.aka.amazon.com/#/picker-eligibilities/LEJ1'==window.location.href) {
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); // removeAllPickerEligibilities
$("a:contains('MultiXLargePicking')").click();
$("a:contains('MultiXLargeWrapPicking')").click();
$("a:contains('NonMoveablePicker')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
} else if ('https://fc-eligibility-website-dub.aka.amazon.com/#/cluster-eligibilities/LEJ1'==window.location.href) {
//Cluster
//$("a:contains('Cluster Eligibilities')").click();
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); //remove cluster egi
$("a:contains('H3-PUP_All')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
}
}
function PUP_XL_H1umstellen(){
if ('https://fc-eligibility-website-dub.aka.amazon.com/#/picker-eligibilities/LEJ1'==window.location.href) {
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); // removeAllPickerEligibilities
$("a:contains('MultiXLargePicking')").click();
$("a:contains('MultiXLargeWrapPicking')").click();
$("a:contains('NonMoveablePicker')").click();
$("a:contains('MultiXMergePicking')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
} else if ('https://fc-eligibility-website-dub.aka.amazon.com/#/cluster-eligibilities/LEJ1'==window.location.href) {
//Cluster
//$("a:contains('Cluster Eligibilities')").click();
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); //remove cluster egi
$("a:contains('H1-All')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
}
}
function PUP_NC_umstellen(){
if ('https://fc-eligibility-website-dub.aka.amazon.com/#/picker-eligibilities/LEJ1'==window.location.href) {
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); // removeAllPickerEligibilities
$("a:contains('NonConPUPPicking')").click();
$("a:contains('NonMoveablePicker')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
} else if ('https://fc-eligibility-website-dub.aka.amazon.com/#/cluster-eligibilities/LEJ1'==window.location.href) {
//Cluster
//$("a:contains('Cluster Eligibilities')").click();
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); //remove cluster egi
$("a:contains('H3-PUP_All')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
}
}
function PUP_NCe_umstellen(){
if ('https://fc-eligibility-website-dub.aka.amazon.com/#/picker-eligibilities/LEJ1'==window.location.href) {
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); // removeAllPickerEligibilities
$("a:contains('NonConExceptionPUPPicking')").click();
$("a:contains('NonMoveablePicker')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
} else if ('https://fc-eligibility-website-dub.aka.amazon.com/#/cluster-eligibilities/LEJ1'==window.location.href) {
//Cluster
//$("a:contains('Cluster Eligibilities')").click();
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); //remove cluster egi
$("a:contains('H3-PUP_All')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
}
}
function DamageSingleUmstellen(){
if ('https://fc-eligibility-website-dub.aka.amazon.com/#/picker-eligibilities/LEJ1'==window.location.href) {
//Picker Eligibilities umstellen
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); // removeAllPickerEligibilities
$("a:contains('FracsZonePicking')").click();
$("a:contains('NonMoveablePicker')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
} else if ('https://fc-eligibility-website-dub.aka.amazon.com/#/cluster-eligibilities/LEJ1'==window.location.href) {
// Cluster Eligibilities umstellen
//$("a:contains('Cluster Eligibilities')").click(); // Webseitenwechsel -> ClusterEligibilities
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); // remove cluster egi
$("a:contains('H1-All')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
} else {
alert ('Fehler: falsche Webseite wird angesteuert!');
}
}
function FracsOverstockUmstellen(){
if ('https://fc-eligibility-website-dub.aka.amazon.com/#/picker-eligibilities/LEJ1'==window.location.href) {
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); // removeAllPickerEligibilities
$("a:contains('FracsOverstockLTLPicking')").click();
$("a:contains('NonMoveablePicker')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
} else if ('https://fc-eligibility-website-dub.aka.amazon.com/#/cluster-eligibilities/LEJ1'==window.location.href) {
//Cluster
//$("a:contains('Cluster Eligibilities')").click();
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); //remove cluster egi
$("a:contains('H1-All')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
}
}
function DamageLTLUmstellen(){
if ('https://fc-eligibility-website-dub.aka.amazon.com/#/picker-eligibilities/LEJ1'==window.location.href) {
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); // removeAllPickerEligibilities
$("a:contains('FracsDamageLTLPicking')").click();
$("a:contains('NonMoveablePicker')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
} else if ('https://fc-eligibility-website-dub.aka.amazon.com/#/cluster-eligibilities/LEJ1'==window.location.href) {
//Cluster
//$("a:contains('Cluster Eligibilities')").click();
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); //remove cluster egi
$("a:contains('H1-All')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
}
}
function DamageLTLOverstockLTLUmstellen(){
if ('https://fc-eligibility-website-dub.aka.amazon.com/#/picker-eligibilities/LEJ1'==window.location.href) {
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); // removeAllPickerEligibilities
$("a:contains('FracsDamageLTLPicking')").click();
$("a:contains('FracsOverstockLTLPicking')").click();
$("a:contains('NonMoveablePicker')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
} else if ('https://fc-eligibility-website-dub.aka.amazon.com/#/cluster-eligibilities/LEJ1'==window.location.href) {
//Cluster
//$("a:contains('Cluster Eligibilities')").click();
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); //remove cluster egi
$("a:contains('H1-All')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
}
}
function SiocNonConUmstellen(){
if ('https://fc-eligibility-website-dub.aka.amazon.com/#/picker-eligibilities/LEJ1'==window.location.href) {
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); // removeAllPickerEligibilities
$("a:contains('SIOCNonConPicking')").click();
$("a:contains('NonMoveablePicker')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
} else if ('https://fc-eligibility-website-dub.aka.amazon.com/#/cluster-eligibilities/LEJ1'==window.location.href) {
//Cluster
//$("a:contains('Cluster Eligibilities')").click();
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); //remove cluster egi
$("a:contains('H3-PUP_All')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
}
}
function FracsRemoveUmstellen(){
if ('https://fc-eligibility-website-dub.aka.amazon.com/#/picker-eligibilities/LEJ1'==window.location.href) {
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); // removeAllPickerEligibilities
$("a:contains('FracsRemovePicking')").click();
$("a:contains('NonMoveablePicker')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
} else if ('https://fc-eligibility-website-dub.aka.amazon.com/#/cluster-eligibilities/LEJ1'==window.location.href) {
//Cluster
//$("a:contains('Cluster Eligibilities')").click();
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); //remove cluster egi
$("a:contains('H1-All')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
}
}
function hotpicksh1Umstellen(){
if ('https://fc-eligibility-website-dub.aka.amazon.com/#/picker-eligibilities/LEJ1'==window.location.href) {
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); // removeAllPickerEligibilities
$("a:contains('HotPickPicking')").click();
$("a:contains('NonMoveablePicker')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
} else if ('https://fc-eligibility-website-dub.aka.amazon.com/#/cluster-eligibilities/LEJ1'==window.location.href) {
//Cluster
//$("a:contains('Cluster Eligibilities')").click();
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); //remove cluster egi
$("a:contains('H1-All')").click();
$("a:contains('H1-NonSort_All')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
}
}
function rejectsh1Umstellen(){
if ('https://fc-eligibility-website-dub.aka.amazon.com/#/picker-eligibilities/LEJ1'==window.location.href) {
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); // removeAllPickerEligibilities
$("a:contains('QAPicking')").click();
$("a:contains('NonMoveablePicker')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
} else if ('https://fc-eligibility-website-dub.aka.amazon.com/#/cluster-eligibilities/LEJ1'==window.location.href) {
//Cluster
//$("a:contains('Cluster Eligibilities')").click();
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); //remove cluster egi
$("a:contains('H1-All')").click();
$("a:contains('H1-NonSort_All')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
}
}
function ProbSolv1Umstellen(){
if ('https://fc-eligibility-website-dub.aka.amazon.com/#/picker-eligibilities/LEJ1'==window.location.href) {
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); // removeAllPickerEligibilities
$("a:contains('NonConTeamLiftRejectPicking')").click();
$("a:contains('NonMoveablePicker')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
} else if ('https://fc-eligibility-website-dub.aka.amazon.com/#/cluster-eligibilities/LEJ1'==window.location.href) {
//Cluster
//$("a:contains('Cluster Eligibilities')").click();
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); //remove cluster egi
$("a:contains('H1-All')").click();
$("a:contains('H1-NonSort_All')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
}
}
function TransPicking_umstellen(){
if ('https://fc-eligibility-website-dub.aka.amazon.com/#/picker-eligibilities/LEJ1'==window.location.href) {
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); // removeAllPickerEligibilities
$("a:contains('TransPicking')").click();
$("a:contains('NonMoveablePicker')").click();
$("a:contains('TransHazmatPicking')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
} else if ('https://fc-eligibility-website-dub.aka.amazon.com/#/cluster-eligibilities/LEJ1'==window.location.href) {
//Cluster
//$("a:contains('Cluster Eligibilities')").click();
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); //remove cluster egi
$("a:contains('H1-NonSort_All')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
}
}
function NCPTUmstellen(){
if ('https://fc-eligibility-website-dub.aka.amazon.com/#/picker-eligibilities/LEJ1'==window.location.href) {
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); // removeAllPickerEligibilities
$("a:contains('NonConPTPicking')").click();
$("a:contains('NonMoveablePicker')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
} else if ('https://fc-eligibility-website-dub.aka.amazon.com/#/cluster-eligibilities/LEJ1'==window.location.href) {
//Cluster
//$("a:contains('Cluster Eligibilities')").click();
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); //remove cluster egi
$("a:contains('H1-NonSort_All')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
}
}
function EXPTUmstellen(){
if ('https://fc-eligibility-website-dub.aka.amazon.com/#/picker-eligibilities/LEJ1'==window.location.href) {
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); // removeAllPickerEligibilities
$("a:contains('NonConExceptionPTPicking')").click();
$("a:contains('NonMoveablePicker')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
} else if ('https://fc-eligibility-website-dub.aka.amazon.com/#/cluster-eligibilities/LEJ1'==window.location.href) {
//Cluster
//$("a:contains('Cluster Eligibilities')").click();
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); //remove cluster egi
$("a:contains('H1-NonSort_All')").click();

console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
}
}
function DamageMultiUmstellen(){
if ('https://fc-eligibility-website-dub.aka.amazon.com/#/picker-eligibilities/LEJ1'==window.location.href) {
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); // removeAllPickerEligibilities
$("a:contains('FracsDamageMultiPicking')").click();
$("a:contains('NonMoveablePicker')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
} else if ('https://fc-eligibility-website-dub.aka.amazon.com/#/cluster-eligibilities/LEJ1'==window.location.href) {
//Cluster
//$("a:contains('Cluster Eligibilities')").click();
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); //remove cluster egi
$("a:contains('H1-All')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
}
}
function FracsDonateUmstellen(){
if ('https://fc-eligibility-website-dub.aka.amazon.com/#/picker-eligibilities/LEJ1'==window.location.href) {
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); // removeAllPickerEligibilities
$("a:contains('FracsDonationPicking')").click();
$("a:contains('NonMoveablePicker')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
} else if ('https://fc-eligibility-website-dub.aka.amazon.com/#/cluster-eligibilities/LEJ1'==window.location.href) {
//Cluster
//$("a:contains('Cluster Eligibilities')").click();
console.log(document.querySelectorAll('.btn.btn-danger.btn-xs.pull-right').item(0).click()); //remove cluster egi
$("a:contains('H1-All')").click();
console.log(document.querySelectorAll('.btn.btn-primary.ng-scope').item(0).click()); // UpdateSelectedEgibilities
}
}



