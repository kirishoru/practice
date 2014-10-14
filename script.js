/*jslint browser: true, vars: true, white: true*/
/*jshint jquery: true*/
/*global $*/


$(document).ready(function () {
	'use strict';

	$('#headwrap, #footerwrap').fadeTo(5000, 0);
	$('#headwrap, #footerwrap').mouseenter(function () {
		$(this).fadeTo('fast', 1);
	});
	$('#headwrap, #footerwrap').mouseleave(function () {
		$(this).fadeTo('slow', 0);
	});

	$('#jp').change(function () {
		if ($(this).val() === "2") {
			$('.jp7').css('display', 'inline-block');
		} else {
			$('.jp7').css('display', 'none');
		}
	});

	$('button').click(function () {
		/*		var $age = parseInt($('input[name=age]').val());
		var $weight = parseInt($('input[name=weight]').val());
		var $chest = parseInt($('input[name=chest]').val());
		var $abdominal = parseInt($('input[name=abdominal]').val());
		var $thigh = parseInt($('input[name=thigh]').val());
		var $subscap = parseInt($('input[name=subscap]').val());
		var $tricep = parseInt($('input[name=tricep]').val());
		var $suprail = parseInt($('input[name=suprail]').val());
		var $midaxil = parseInt($('input[name=midaxil]').val());
		*/
		var $measurements = 0;
		var $bodyFat1 = 0;

		var $age = +$('#age').val();
		var $weight = +$('#weight').val();
		var $chest = +$('#chest').val();
		var $abdominal = +$('#abdominal').val();
		var $thigh = +$('#thigh').val();
		var $subscap = +$('#subscap').val();
		var $tricep = +$('#tricep').val();
		var $suprail = +$('#suprail').val();
		var $midaxil = +$('#midaxil').val();


		if ($('#mf').val() === "1") { //MALE
			if ($('#jp').val() === "2") { //JP7
				//using measurements 12,18,9,7,20,6,15, with age 38 and weight 176; results bf%:13.76 fm:24.30lbs
				$measurements = $chest + $abdominal + $thigh + $subscap + $tricep + $suprail + $midaxil;
				$bodyFat1 = Math.round((4.95 / (1.112 - (0.00043499 * $measurements) + (0.00000055 * (Math.pow($measurements, 2)) - (0.00028826 * $age))) - 4.5) * 10000) / 100;
				$('.results').append("<div class='bf'><p>Body Fat = " + $bodyFat1 + "%</p><p>Fat Mass = " + (Math.round($weight * $bodyFat1) / 100) + " lbs</p></div>");
			} else { //JP3
				//using measurements 12,18,9, with age 38 and weight 176; results bf%:12.71 fm:22.44lbs
				$measurements = $chest + $abdominal + $thigh;
				$bodyFat1 = Math.round((4.95 / (1.10938 - (0.0008267 * $measurements) + (0.0000016 * (Math.pow($measurements, 2)) - (0.0002574 * $age))) - 4.5) * 10000) / 100;
				$('.results').append("<div class='bf'><p>Body Fat = " + $bodyFat1 + "%</p><p>Fat Mass = " + (Math.round($weight * $bodyFat1) / 100) + " lbs</p></div>");
			}
		} else { //FEMALE
			if ($('#jp').val() === "2") { //JP7
				//using measurements 12,18,9,7,20,6,15, with age 38 and weight 176; results bf%:13.76 fm:24.30lbs
				$measurements = $chest + $abdominal + $thigh + $subscap + $tricep + $suprail + $midaxil;
				$bodyFat1 = Math.round((4.95 / (1.097 - (0.00046971 * $measurements) + (0.00000056 * (Math.pow($measurements, 2)) - (0.00012828 * $age))) - 4.5) * 10000) / 100;
				$('.results').append("<div class='bf'><p>Body Fat = " + $bodyFat1 + "%</p><p>Fat Mass = " + (Math.round($weight * $bodyFat1) / 100) + " lbs</p></div>");
			} else { //JP3
				//using measurements 12,18,9, with age 38 and weight 176; results bf%:12.71 fm:22.44lbs
				$measurements = $chest + $abdominal + $thigh;
				$bodyFat1 = Math.round((4.95 / (1.0994921 - (0.0009929 * $measurements) + (0.0000023 * (Math.pow($measurements, 2)) - (0.0001392 * $age))) - 4.5) * 10000) / 100;
				$('.results').append("<div class='bf'><p>Body Fat = " + $bodyFat1 + "%</p><p>Fat Mass = " + (Math.round($weight * $bodyFat1) / 100) + " lbs</p></div>");
			}
		}
		//add removal button


		//commit measurements to log
		var myDate = Date.now();
		var myResults = {
			"date": myDate,
			"age": $age,
			"chest": $chest,
			"abdominal": $abdominal,
			"thigh": $thigh,
			"tricep": $tricep,
			"subscapular": $subscap,
			"midaxilary": $midaxil
		};

		//console results for testing
		console.log(myResults);
	});


	/*
	$(document).on('click', '.bf', function () {
		$(this).remove();
	});
*/

	$(document).on('click', '#btn2', function () {
		$('.bf').remove();
    });

});