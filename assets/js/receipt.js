$(function(){
	$('body').on('click','.payhere',function(){
 
		var page=$(this).id();

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
				str = str + '<table class="table table-bordered table-hover table-responsive">';
				str = str + '<tr>';
				str = str + '<td>Date:</td>';
				str = str + '</tr>';
				str = str + '</table>';

				str = str + '<table class="table table-bordered table-hover table-responsive">';
				str = str + '<tr>';
				str = str + '</tr>';
				str = str + '<tr>'
				str = str + '<td>Fee Receipt</td>';
				str = str + '</tr>';
				str = str + '<td>The Demo School</td>';
				str = str + '</tr>';
				str = str + '</table>';
				
				
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


				str = str + '<table class="table table-bordered table-hover table-responsive">';
				str = str + '<tr>';
				str = str + '<td>Fee Details Below:</td>';
				str = str + '</tr>';
				str = str + '<td>Actual Fee:</td>';
				str = str + '<tr>';
				str = str + '<td>Previous Due:</td>';
				str = str + '</tr>';
				str = str + '<td>Total Due:</td>';
				str = str + '</tr>';
				str = str + '<table class="table table-bordered table-hover table-responsive">';
				str = str + '<tr>';
				str = str + '<td>Discount?</td>';
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '<td>Fine?</td>';
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '<td>Total:</td>';
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '<td>Paid Amount:</td>';
				str = str + '</tr>';
				str = str + '</table>';

				
				str = str + '<table class="table table-bordered table-hover table-responsive">';
				str = str + '<label>Payment Mode:</label>';
				str = str + '<select>';
				str = str + '<option>Cash</option>';
				str = str + '<option>Cheque</option>';
				str = str + '<option>Demand Draft</option>';
				str = str + '<option>Other</option>';
				str = str + '</select>';
				str = str + '</table>';
				str = str + '<button type="button" class="btn btn-danger">Update</button>';


				
				
						
				
				
				
				/*str = str + '<table class="table table-bordered table-hover table-responsive">';
				str = str + '<textarea class="form-control col-md-4" rows="5" >'.'</textarea>';	
				str = str + '</table>';	*/	







				$('#invoicedatahere').html(str);
			
			}
	});
});
});
