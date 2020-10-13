$(document).ready(function() {
    $( "#geo-monaco-ville" ).hover(
	  function() {
	    $(".label-quartier").append( $( "<span> de Monaco Ville</span>" ) );
	  }, function() {
	    $(".label-quartier").find( "span" ).last().remove();
	  }
	);

	$( "#geo-monte-carlo" ).hover(
	  function() {
	    $(".label-quartier").append( $( "<span> de Monte-Carlo</span>" ) );
	  }, function() {
	    $(".label-quartier").find( "span" ).last().remove();
	  }
	);

	$( "#geo-fontvieille" ).hover(
	  function() {
	    $(".label-quartier").append( $( "<span> de Fontvieille</span>" ) );
	  }, function() {
	    $(".label-quartier").find( "span" ).last().remove();
	  }
	);

	$( "#geo-condamine" ).hover(
	  function() {
	    $(".label-quartier").append( $( "<span> de La Condamine</span>" ) );
	  }, function() {
	    $(".label-quartier").find( "span" ).last().remove();
	  }
	);
});