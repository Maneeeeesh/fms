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
				str = str + '<table style="width: 800px; font-size: 13px; font-family: verdana; border:#808080 solid 1px; background: #ffffff" class="table print_me">';
				str = str + '<tbody>';
				str = str + '<tr height="100">';
				str = str + '<td align="left" style="width: 150px; padding: 0px 0px 0px 8px; vertical-align: middle">Date: <u>20/04/2019</u></td><td align="center" style="width: 500px;padding: 0px 0px 0px 8px; vertical-align: middle"><h4 align="center"><b>The Demo School</b><br>Receipt</h4></td>
				str = str + '<td align="right" style="width: 150px;font-size: 13px; padding: 0px 8px 0px 0px; vertical-align: middle">Receipt No. <span style="border-radius: 5px; border: #000000 solid 1px; padding: 5px;" id="receiptNo">?</span></td>
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '<td colspan="3">';
				str = str + '<table class="table">';
				str = str + '<tbody>';
				str = str + '<tr>';
				str = str + '<td>';
				str = str + '<table class="table" style="border:#ff0000 solid 0px; width: 360px;">';
				str = str + '<tbody>';
				str = str + '<tr>';
				str = str + '<td width="100">Reg. No. </td>';
				str = str + '<td>'+obj.students['student_ID']+'</td>';
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '<td>Name </td>';
				str = str + '<td>'+obj.students['first_Name']+' '+obj.students['last_Name']+'</td>';
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '<td>Class </td>';
				str = str + '<td>'+obj.students['class_sess_ID']+'</td>';
				str = str + '</tr><tr><td>Session </td>';
				str = str + '<td>: 2018-19</td>';
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '<td>Father </td>';
				str = str + '<td>: Rajesh Kumar</td>';
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '<td colspan="2" style="color: #900000; text-decoration: underline; padding: 10px 0px 0px 0px">Fee Detail Below:</td>';
				str = str + '</tr>';
				str = str + '<tr style="background: #f0f0f0; color: #900000">';
				str = str + '<td>Actual Fee </td>';
				str = str + '<td>: Rs. 1000/-</td>';
				str = str + '</tr>';
				str = str + '<tr style="background: #f0f0f0; color: #900000">';
				str = str + '<td>Previous Due </td>';
				str = str + '<td>: Rs. 0/-</td>';
				str = str + '</tr>';
				str = str + '<tr style="background: #f0f0f0; color: #900000">';

				str = str + '<td><b>Total Due</b> </td>';
				str = str + '<td>: <b>Rs. 1000/-</b></td>';
				str = str + '</tr>';
				str = str + '</tbody>';
				str = str + '</table>';
				str = str + '</td>';
				str = str +  '<td>';
				str = str + '<table class="table" style="border-bottom: #000000 solid 1px; border:#ff0000 solid 0px; width: 360px; float: right">';
				str = str + '<tbody>';
				str = str + '<tr>';
				str = str + '<td width="200px">Total Due <span style="float: right; padding: 8px 0px; font-size: 11px" class="fa fa-plus"></span></td>';
				str = str + '<td width="160px"><label class="receipt_label">: Rs. 1000</label><input type="hidden" id="due_amnt_input" name="due_amnt_input" value="1000" style="width: 100px; padding: 0px; border:#f0f0f0 solid 1px"></td>';
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '<td style="color: #909000">Discount? <span style="float: right; padding: 8px 0px; font-size: 11px" class="fa fa-minus"></span><div style="float: left; font-size: 8px; color: #0000ff; clear: both"></div>';
				str = str + '</td>';
				str = str + '<td>';
				str = str + '<label class="receipt_label">: Rs.</label><span class="receipt_content"><input type="text" id="_discount_" name="_discount_" value="0" style="width: 100px; padding: 0px; background: #f0f000; border:#000000 solid 0px">/-</span></td>';
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '<td style="color: #909000">Fine? <span style="float: right; padding: 8px 0px; font-size: 11px" class="fa fa-plus"></span></td><td><label class="receipt_label">: Rs.</label><span class="receipt_content"><input type="text" id="_fine_" name="_fine_" value="0" style="width: 100px; padding: 0px; background: #f0f000; border:#000000 solid 0px">/-</span></td>';
				str = str + '</tr>';
				str = str + '<tr style="font-weight: bold">';
				str = str + '<td>Total </td>';
				str = str + '<td>';
				str = str + '<label class="receipt_label">: Rs. </label><span class="receipt_content"><span class="total_amnt" id="total_amnt_display">1000</span><input type="hidden" id="total_amnt" name="total_amnt" value="1000" style="width: 100px; padding: 0px; border:#000000 solid 0px; font-weight: bold">/-</span></td>';
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '<td>';
				str = str + '<input type="button" class="btn btn-danger" style="border-radius: 3px; padding: 1px 3px; font-size: 11px" id="update_total" value="Update"></td><td style="font-size: 10px; text-align: right; width: 200px"><span id="total_amnt_in_words">ONE THOUSAND </span></td>';
				str = str + '</tr>'; 
				str = str + '<tr>';
				str = str + '<td width="200px" style="background: #406373; color: #ffffff">Paid Amount </td>';
				str = str + '<td width="160px" style="background: #406373; color: #ffffff"><label class="receipt_label">: Rs. </label><span class="receipt_content"><input type="text" id="paid_amount" name="paid_amount" placeholder="1000" value="1000" style="width: 100px; padding: 0px; border:#f0f0f0 solid 1px; color: #0000ff; font-weight: bold">/-</span></td>';
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '<td style="font-size: 13px; color: #0000ff; padding:8px 0px 0px 8px">Payment Mode </td>';
				str = str + '<td>: <select name="cmbPaymentMode" id="cmbPaymentMode" style="color: #0000ff; font-size: 13px; width: 100px"><option value="cash">Cash</option><option value="cheque">Cheque</option><option value="DD">Demand Draft</option></select><br>';
				str = str + '<div style="border-radius: 5px; background: #505050; color: #ffffff; padding: 0px 3px; width: 100%; float: left;0000000000000000000000000000000000000000000000000000000000000000000000000000000000000 display: none; border: #ff0000 solid 0px" id="_noncashdetail"><div style="float: left"><b id="_ccdd_no" style="font-size: 9px"></b> No.<br><input type="text" style="width: 75px; padding: 0px" name="txtCCDDNumber" id="txtCCDDNumber">&nbsp;</div>';
				str = str + '<div style="float: right"><b id="_ccdd_dt" style="font-size: 9px"></b> Date<br><input type="text" style="width: 75px; padding: 0px" name="txtCCDDDate" id="txtCCDDDate"></div>';
				str = str + '</div>';
				str = str + '</td>';
				str = str + '</tr>';
				str = str + '</tbody>';
				str = str + '</table>';
				str = str + '</td>';
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '<td colspan="2"><label>Any Remark?</label><div style="clear: both"></div><textarea name="txtDesc" id="txtDesc" style="width: 360px; height:80px"></textarea></td>';
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '<td colspan="2" style="font-size: 12px; text-align: center"><b>Address</b>: Haldwani<br><b>Mob.</b>: 90129 72556 - <b>Email.</b>: ttchld@gmail.com</td></tr><tr><td colspan="2" style="font-size: 10px"><sup>*</sup>Fee Heads: , ADMISSION</td>';
				str = str + '</tr>';
				str = str + '<tr>';
				str = str + '<td colspan="2"><div class="col-sm-5" style="visibility:visible;font-size: 10px; text-align: right" id="submit_print"><input type="button" value="Submit Fee" class="btn btn-primary" id="cmbReceiptButton"></div></td></tr></tbody></table><center></center></td>';
				str = str + '</tr>';
				str = str + '</tbody>';
				str = str + '</table>';
				


				$('#invoicedatahere').html(str);
			
			}
	});
});
});
