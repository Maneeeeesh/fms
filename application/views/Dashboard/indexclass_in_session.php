<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
		<div class="row">
			<ol class="breadcrumb">
				<li><a href="#">
					<em class="fa fa-home"></em>Home
				</a></li>
				<li class="active">Master</li>
			</ol>
		</div><!--/.row-->
		<div class="pannel-heading">Classes In Session</div>
		<div class="pannel-body">

		</div>
				<form name="frmSession" method="post" action="<?php echo site_url('class_in_session/insert_record');?>">
								<!--student details-->
								<div class="col-md-3">
									<div class="form-group">
									<label>class_session_ID</label>
									<input type="text" name="txtcsid" id="txtcsid">
								</div>
							</div>
								<div class="col-md-3">
									<div class="form-group">
									<label>session_ID</label>
									<input type="text" name="txtsid" id="txtsid">
								</div>
							</div>
								<div class="col-md-3">
									<div class="form-group col-md-3">
									<label>class</label>
									<input type="text" name="txtclass" id="txtclass">
									</div>
							</div>
									<div class="col-sm-12">
									<button type="submit" class="btn btn-primary">Submit</button>
									<button type="reset" class="btn btn-default">Reset</button>
								</div>
								<div class="form-group">
									<div class="col-md-12 widget-left" id="msghere" style="font-size: 10px; color: #ff0000">
										<br><br><?php echo $this->session->flashdata('msg_'); ?>
									</div>
								</div>
							</fieldset>
							</form>	

						
				
								
		
			
			<div class="col-sm-12">
				<p class="back-link">BCA final Year Project by <a href="#">FMS team</a></p>
			</div>
		</div><!--/.row-->
	</div>