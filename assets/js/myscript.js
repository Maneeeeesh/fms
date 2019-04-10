$(function(){
	$('#cmbStudents').change(function(){
		$('#printhere').html("");

		var url_ = site_url_ + "/studentregi/getStudent/"+ $(this).val();
		
		$.ajax({
			type: "GET",
			url: url_,
			success: function(data){
				//alert(data);	
				var obj=JSON.parse(data);			

				$('#txtfrstnme').val(obj['stud']['first_Name']);
				$('#txtlstnme').val(obj['stud']['last_Name']);
				$('#txtfnme').val(obj['stud']['fathers_Name']);
				$('#txtdte').val(obj['stud']['dob']);
				$('#txtntnlty').val(obj['stud']['nationality']);
				$('#txtbgrp').val(obj['stud']['blood_Group']);
				$('#txtstts').val(obj['stud']['status']);
				$('#txtmnme').val(obj['stud']['mothers_Name']);
				$('#txtusrnme').val(obj['stud']['username']);
				$('#txtctgry').val(obj['stud']['category']);
				$('#txtcntct').val(obj['stud']['contact']);
				$('#txtemail').val(obj['stud']['email']);
				$('#txtaddr').val(obj['stud']['address']);
				$('#txtarea').val(obj['stud']['area']);
				$('#txtcity').val(obj['stud']['city']);
				$('#txtstate').val(obj['stud']['state']);
				$('#txtdstrct').val(obj['stud']['district']);
				$('#txtpincode').val(obj['stud']['pincode']);
				$('#txtsibling').val(obj['stud']['siblings']);




				
				if(obj['stud']['gender'] == 'MALE'){
				
					$('#txtmle').attr('checked', true);
				} else {
					$('#txtfmle').attr('checked', true);
				}


				/*str = str + "<table class='table table-striped'>";
				str = str + "<tr>";
				str = str + "<th>Student Name</th>";
				str = str + "</tr>";
				for(i=0; i<obj.stud.length; i++){
					str = str + "<tr>";
					str = str + "<td>" + obj.stud[i]['first_Name'] + "</td>";
					str = str + "</tr>";
				}
				str = str + "</table>";
				$('#printhere').html(str);
				*/
				// /$('#txtfrstnme').val(obj.stud.first_Name);
			}
		});
	});
});
