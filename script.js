$(document).ready(function () {

    //		$('#col2').height( $(document).height() );
    //		$(window).resize(function() {
    //			 $('#col2').height( $(window).height());
    //		});
    $('#headwrap, #footerwrap').fadeTo(5000, 0);
    $('#headwrap, #footerwrap').mouseenter(function () {
        $(this).fadeTo('fast', 1)
    });
    $('#headwrap, #footerwrap').mouseleave(function () {
        $(this).fadeTo('slow', 0)
    });

    $('#jp').change(function () {
        if ($(this).val() == "2") {
            $('.jp7').css('display', 'inline-block')
        } else {
            $('.jp7').css('display', 'none')
        }
    });

    $('#button').click(function () {
        var $age = parseInt($('input[name=age]').val());
        var $weight = parseInt($('input[name=weight]').val());
        var $chest = parseInt($('input[name=chest]').val());
        var $abdominal = parseInt($('input[name=abdominal]').val());
        var $thigh = parseInt($('input[name=thigh]').val());
        var $subscap = parseInt($('input[name=subscap]').val());
        var $tricep = parseInt($('input[name=tricep]').val());
        var $suprail = parseInt($('input[name=suprail]').val());
        var $midaxil = parseInt($('input[name=midaxil]').val());

        if ($('#mf').val() == "1") { //MALE
            if ($('#jp').val() == "2") { //JP7
                //using measurements 12,18,9,7,20,6,15, with age 38 and weight 176; results bf%:13.76 fm:24.30lbs
                var $measurements = $chest + $abdominal + $thigh + $subscap + $tricep + $suprail + $midaxil;
                var $bodyFat1 = Math.round((4.95 / (1.112 - (0.00043499 * $measurements) + (0.00000055 * (Math.pow($measurements, 2)) - (0.00028826 * $age))) - 4.5) * 10000) / 100;
                $('.results').append("<div class='bf'><p>Body Fat = " + $bodyFat1 + "%</p><p>Fat Mass = " + (Math.round($weight * $bodyFat1) / 100) + " lbs</p></div>");
            } else { //JP3
                //using measurements 12,18,9, with age 38 and weight 176; results bf%:12.71 fm:22.44lbs
                var $measurements = $chest + $abdominal + $thigh;
                var $bodyFat1 = Math.round((4.95 / (1.10938 - (0.0008267 * $measurements) + (0.0000016 * (Math.pow($measurements, 2)) - (0.0002574 * $age))) - 4.5) * 10000) / 100;
                $('.results').append("<div class='bf'><p>Body Fat = " + $bodyFat1 + "%</p><p>Fat Mass = " + (Math.round($weight * $bodyFat1) / 100) + " lbs</p></div>");
            }
        } else { //FEMALE
            if ($('#jp').val() == "2") { //JP7
                //using measurements 12,18,9,7,20,6,15, with age 38 and weight 176; results bf%:13.76 fm:24.30lbs
                var $measurements = $chest + $abdominal + $thigh + $subscap + $tricep + $suprail + $midaxil;
                var $bodyFat1 = Math.round((4.95 / (1.097 - (0.00046971 * $measurements) + (0.00000056 * (Math.pow($measurements, 2)) - (0.00012828 * $age))) - 4.5) * 10000) / 100;
                $('.results').append("<div class='bf'><p>Body Fat = " + $bodyFat1 + "%</p><p>Fat Mass = " + (Math.round($weight * $bodyFat1) / 100) + " lbs</p></div>");
            } else { //JP3
                //using measurements 12,18,9, with age 38 and weight 176; results bf%:12.71 fm:22.44lbs
                var $measurements = $chest + $abdominal + $thigh;
                var $bodyFat1 = Math.round((4.95 / (1.0994921 - (0.0009929 * $measurements) + (0.0000023 * (Math.pow($measurements, 2)) - (0.0001392 * $age))) - 4.5) * 10000) / 100;
                $('.results').append("<div class='bf'><p>Body Fat = " + $bodyFat1 + "%</p><p>Fat Mass = " + (Math.round($weight * $bodyFat1) / 100) + " lbs</p></div>");
            }
        }
    });

    $(document).on('click', '.bf', function () {
        $(this).remove()
    });

});