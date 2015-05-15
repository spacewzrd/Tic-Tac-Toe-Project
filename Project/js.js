$(document).ready(function(){
	var turn = 0;
	var oddTurn = '.cracker';
	var evenTurn = '.chesse';
	$('.chbutt').click(function(){
				 oddTurn = '.chesse';
				 evenTurn = '.cracker';
	});
	
		$('.cell').click(function(){
			turn++

	 		if(turn % 2 == 0){
				$(this).children(evenTurn).removeClass('hidden').addClass('animated bounce');
				$(this).children(oddTurn).removeClass('cracker');
				$(this).children(oddTurn).removeClass('chesse');
				$(this).addClass('winClass1');	
				}
			 else if(turn % 2 == 1){ 
				$(this).children(oddTurn).removeClass('hidden').addClass('animated jello');
				$(this).children(evenTurn).removeClass('chesse');
				$(this).children(evenTurn).removeClass('cracker');
				$(this).addClass('winClass2');
				}
			if ($("#sq1").hasClass('winClass1') &&
         $("#sq2").hasClass('winClass1') &&
         $("#sq3").hasClass('winClass1')
          ||
         $("#sq4").hasClass('winClass1') &&
         $("#sq5").hasClass('winClass1') &&
         $("#sq6").hasClass('winClass1')
          ||
         $("#sq7").hasClass('winClass1') &&
         $("#sq8").hasClass('winClass1') &&
         $("#sq9").hasClass('winClass1')
          ||
         $("#sq1").hasClass('winClass1') &&
         $("#sq4").hasClass('winClass1') &&
         $("#sq7").hasClass('winClass1')
          ||
         $("#sq2").hasClass('winClass1') &&
         $("#sq5").hasClass('winClass1') &&
         $("#sq8").hasClass('winClass1')
          ||
         $("#sq3").hasClass('winClass1') &&
         $("#sq6").hasClass('winClass1') &&
         $("#sq9").hasClass('winClass1')
          ||
         $("#sq1").hasClass('winClass1') &&
         $("#sq5").hasClass('winClass1') &&
         $("#sq9").hasClass('winClass1')
          ||
         $("#sq3").hasClass('winClass1') &&
         $("#sq5").hasClass('winClass1') &&
         $("#sq7").hasClass('winClass1')){
     		alert('WINNER');		
		}
		else if ($("#sq1").hasClass('winClass2') &&
         $("#sq2").hasClass('winClass2') &&
         $("#sq3").hasClass('winClass2')
          ||
         $("#sq4").hasClass('winClass2') &&
         $("#sq5").hasClass('winClass2') &&
         $("#sq6").hasClass('winClass2')
          ||
         $("#sq7").hasClass('winClass2') &&
         $("#sq8").hasClass('winClass2') &&
         $("#sq9").hasClass('winClass2')
          ||
         $("#sq1").hasClass('winClass2') &&
         $("#sq4").hasClass('winClass2') &&
         $("#sq7").hasClass('winClass2')
          ||
         $("#sq2").hasClass('winClass2') &&
         $("#sq5").hasClass('winClass2') &&
         $("#sq8").hasClass('winClass2')
          ||
         $("#sq3").hasClass('winClass2') &&
         $("#sq6").hasClass('winClass2') &&
         $("#sq9").hasClass('winClass2')
          ||
         $("#sq1").hasClass('winClass2') &&
         $("#sq5").hasClass('winClass2') &&
         $("#sq9").hasClass('winClass2')
          ||
         $("#sq3").hasClass('winClass2') &&
         $("#sq5").hasClass('winClass2') &&
         $("#sq7").hasClass('winClass2')){
     		alert('WINNER');			
		}
		else if (turn == 9){
			alert("Fail")
		}

		});
		$('.new').click(function(){
			location.reload();
		});

	
});