$(document).ready(function(){
    var form_row = 1;
    $('#add-form').click(function(){
        $('#selec').append(
            
            '<div class="form-port"><div class="form-back"><div class="portion"><label for="name" >Name</label><input type="text" id="name' + form_row + '" class="namec" data-no="'+ form_row + '"></div><div class="portion"><label for="fname">Father s Name</label><input type="text" id="fname' + form_row + '" data-no="'+ form_row + '"></div><div class="portion"> <label for="dob">Date of Birth</label><input type="date" id="dob' + form_row + '" data-no="'+ form_row + '"></div> <div class="portion"><label for="address">Address</label><textarea name="address" id="address' + form_row + '"  data-no="'+ form_row + '"></textarea></div><div class="portion"><label for="mob">Mobile No</label><input type="text" id="mob' + form_row + '" data-no="'+ form_row + '"></div><div class="portion"><label for="email">Email ID</label><input type="email" id="email' + form_row + '" data-no="'+ form_row + '"></div><div class="portion"><label for="qualification">Qualification</label><select name="qualification" id="qualification' + form_row + '" data-no="'+ form_row + '"><option value="Qualification 1">Qualification 1</option><option value="Qualification 1">Qualification 1</option><option value="Qualification 1">Qualification 1</option><option value="Qualification 1">Qualification 1</option></select></div><div class="portion"><label for="occupation">Occupation</label><select name="occupation" id="occupation' + form_row + '" data-no="'+ form_row + '"><option value="Occupation 1">Occupation 1</option><option value="Occupation 1">Occupation 1</option><option value="Occupation 1">Occupation 1</option><option value="Occupation 1">Occupation 1</option></select></div><div class="portion"><label for="pan">Pan No</label><input type="text" id="panno' + form_row + '" data-no="'+ form_row + '"><input type="file" id="panUpload' + form_row + '" data-no="'+ form_row + '"></div><div class="portion"><label for="pan">Address Proof</label><input type="file" id="addressProof' + form_row + '" data-no="'+ form_row + '" data-no="'+ form_row + '"></div><div class="portion"><label for="pan">Passport Size Photo</label><input type="file" id="filePassport' + form_row + '" data-no="'+ form_row + '"></div></div><div class="resule"><div class="poertin"><table><tr><td>Name</td><td id="showname' + form_row + '" class="shownamec"></td></tr><tr><td>Father Name</td><td id="showfname' + form_row + '" class="showfname"></td></tr><tr><td>Date of Birth</td><td id="showdob' + form_row + '" class="showdob"></td></tr><tr><td>Address</td><td id="showaddress' + form_row + '" class="showaddress"></td></tr><tr><td>Mobile No</td><td id="showmob' + form_row + '" class="showmob"></td></tr><tr><td>Email Address</td><td id="showemail' + form_row + '" class="showemail"></td></tr><tr><td>Qualification</td><td id="showqualification' + form_row + '" class="showqualification"></td></tr><tr><td>Occupation</td><td id="showoccupation' + form_row + '" class="showoccupation"></td></tr><tr><td>Pan No</td><td id="showpanno' + form_row + '" class="showpan"></td></tr></table></div></div></div>'
        );
        form_row++;
    });

    $('.get').click(function(){
        $("#selec").find('input[id^="name"]').each(function () {
            var value= $(this).val();
            var no = $(this).attr("data-no");
            $('#showname'+no).html(value);
        });
        $("#selec").find('input[id^="fname"]').each(function () {
            var value= $(this).val();
            var no = $(this).attr("data-no");
            $('#showfname'+no).html(value);
        });
        $("#selec").find('input[id^="dob"]').each(function () {
            var value= $(this).val();
            var no = $(this).attr("data-no");
            $('#showdob'+no).html(value);
        });
        $("#selec").find('textarea[id^="address"]').each(function () {
            var value= $(this).val();
            var no = $(this).attr("data-no");
            $('#showaddress'+no).html(value);
        });
        $("#selec").find('input[id^="mob"]').each(function () {
            var value= $(this).val();
            var no = $(this).attr("data-no");
            $('#showmob'+no).html(value);
        });
        $("#selec").find('input[id^="email"]').each(function () {
            var value= $(this).val();
            var no = $(this).attr("data-no");
            $('#showemail'+no).html(value);
        });
        $("#selec").find('input[id^="panno"]').each(function () {
            var value= $(this).val();
            var no = $(this).attr("data-no");
            $('#showpanno'+no).html(value);
        });
        
        $("#selec").find('select[id^="qualification"]').each(function () {
            var value= $(this).val();
            var no = $(this).attr("data-no");
            $('#showqualification'+no).html(value);
        });	
        $("#selec").find('select[id^="occupation"]').each(function () {
            var value= $(this).val();
            var no = $(this).attr("data-no");
            $('#showoccupation'+no).html(value);
        });					
    });
});