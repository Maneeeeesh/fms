$(function(){
	$('body').on('click','.payhere',function(){
 
		

		var str = this.id;
		var arr = str.split("_");
		var stdid = arr[0];
		var invid = arr[2];
		var url_ = site_url_ + "/receipt/get_invoice_data/"+invid+"/"+stdid;
		$.ajax({
			type: "GET",
			url: url_,
			success: function(data){
				//alert(data);
				//$('#invoicedatahere').html(data)
				var obj = JSON.parse(data);
				var str = '';
				str= str + '<div class=" col-sm-offset-3 col-lg-8 col-lg-offset-3 main dotted">'; 
				str= str + '<table><tr>';
				str = str + '<td align="left" style="width: 150px;font-size: 13px; padding: 0px 8px 0px 0px; vertical-align: middle">Date: 27/2/2019</span></td>'; 
				str = str + '<td align="center" style="width: 500px;padding: 0px 0px 0px 8px; vertical-align: middle"><h4 align="center"><b>The Demo School</b><br>Receipt</h4></td>';
				str = str + '<td align="right" style="width: 150px;font-size: 13px; padding: 0px 8px 0px 0px; vertical-align: middle">Receipt No.</td>'; 
				str = str + '</tr>';
				str = str + '<div class="row"';
				str = str + '<div class="col-md-6">';
				str = str + '<table class="table table-bordered table-hover table-responsive">';
				str = str + '<tr>';
				str = str + '<td>Reg. No.:</td>';
				str = str + '<td>'+obj.students['student_ID']+'</td>';
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '<td>Name:</td>'
				str = str + '<td>'+obj.students['first_Name']+' '+obj.students['last_Name']+'</td>';
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '<td>Class:</td>'
				str = str + '<td>'+obj.students['class_sess_ID']+'</td>';
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '<td>Session:</td>'
				str = str + '<td>'+obj.students['session_ID']+'</td>';
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '<td>Father:</td>'
				str = str + '<td>'+obj.students['fathers_Name']+'</td>';
				str = str + '</tr>';
				str = str + '</table>';
				


				str = str + '<div class="row">';
				str = str + '<div class="col-md-6">';

				str = str + '<table class="table table-bordered table-hover table-responsive">';
				str = str + '<tr>';
				str = str + '<table><b><u class="text-danger">Fee Details Below:</u></b>'
				str = str + '</tr>';
				str = str + '<table class="table table-bordered table-hover table-responsive">';
				str = str + '<tr>'
				str = str + '<td>Actual Fee:</td>';
				str = str + '<td>'+obj.students['actual_Amount']+'</td>';
				str = str + '</tr>'
				str = str + '<tr>';
				str = str + '<td>Previous Due:</td>';
				str = str + '<td>'+obj.students['actual_due_Amount']+'</td>';
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '<td>Total Due:</td>';
				str = str + '<td>'+obj.students['due_Amount']+'</td>';
				str = str + '</tr>';
				str = str + '</table>';
				str = str + '</table>';
				str = str + '</table>';


				due_Amount='';
				discount_Amount='';
				fine='';
				total='';
			    str = str + '<table class="table table-bordered table-hover table-responsive">';
			    str = str + '<tr>';
				str = str + '<td>Total Due:</td>';
				due_Amount=obj.students['due_Amount'];
				str = str + '<td>'+due_Amount+'</td>';
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '<td>Discount?</td>';
				discount_Amount=obj.discount['discount_Amount'];
				str = str + '<td>'+discount_Amount+'</td>';
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '<td>Fine?</td>';
				fine=obj.discount['fine'];
				str = str + '<td>'+fine+'</td>';
				str = str + '</tr>';
				
				str = str + '<tr>';
				str = str + '<td>Total:</td>';
				total=parseInt(due_Amount)-parseInt(discount_Amount)+parseInt(fine);

				str = str + '<td>'+total+'</td>';
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '</table>';
				str = str + '<button type="button" class="btn btn-danger">Update</button>';
				str = str + '<table class="table table-bordered table-hover table-responsive">';
				str = str + '<td width="200px" style="background: #406373; color: #ffffff">Paid Amount</td>';
				total=parseInt(due_Amount)-parseInt(discount_Amount)+parseInt(fine);
				
				str = str + '<td <td width="160px" style="background: #406373; color: #ffffff">'+total+'</td>';
				str = str + '</td>';

				
				str = str + '<table class="table table-bordered table-hover table-responsive">';
				str = str + '<label>Payment Mode:</label>';
				str = str + '<select>';
				str = str + '<option>Cash</option>';
				str = str + '<option>Cheque</option>';
				str = str + '<option>Demand Draft</option>';
				str = str + '<option>Other</option>';
				str = str + '</select>';
				
				str = str + '</table>';
				
				str = str + '<table class="table table-bordered table-hover table-responsive">';
				str = str + '<tr>';
				str = str + '<table><b><usr class="text-danger">Any Remark?</u></b>'
				str = str + '</tr>';
				str = str + '<div class="form-group">';
 				str = str + '<label for="comment"></label>';
  				str = str + '<textarea class="form-control" rows="5" id="comment"></textarea>';
				str = str + '</div>';
				str = str + '</tr>';
				str = str + '</table>';
				str = str + '<button type="button" class="btn btn-primary">Submit Fee</button>';
				
				str = str + '<table class="table table-bordered table-hover table-responsive">';

				str = str + '<tr><td colspan="3" style="font-size: 12px; text-align: center"><b>Address</b>: Haldwani<br><b>Mob.</b>: 90129 72556 - <b>Email.</b>: ttchld@gmail.com</td>';
				



				$('#invoicedatahere').html(str);
			
			}
	});
});
});
