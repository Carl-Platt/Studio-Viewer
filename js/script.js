var req = new XMLHttpRequest();
var url = "http://feeds.feedburner.com/ActiveContests";

req.open("GET", url , true);
req.onload = showContests;
req.send(null);

function showContests(){
	$(req.responseXML).find('item').each(function(idx){
		/* Parse the XML File */
		var guid = $(this).find('guid').text();
		var title = $(this).find('title').text();
		var link = $(this).find('link').text();
		var description = $(this).find('description').text();

		$('<li></li>')
			.append($('<span class="title"></span>').text(idx + '. ' + title))
			.append($('<span class="description">' + cleanText(description) + '</span>'))
			.append($('<div class="links">' +
						'<a class="link more-info" href="' + link + '">more</a>' +
						'<a class="link forum-link" href="">forum</a>'+
						'<a class="link register-link" href="">register</a>'+
						'<div class="clear"></div>' +
					  '</div>'))	//link	
			.appendTo('#contest-list');
	});
}

/*
 * cleans out random text like empty tags and any h1 -h4
 *
 */

function cleanText(text){
	return text.replace("<p>&nbsp;</p>", "");
}

