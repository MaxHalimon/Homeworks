/* -------------------------------------

	cusel version 2.5
	last update: 31.10.11
	СЃРјРµРЅР° РѕР±С‹С‡РЅРѕРіРѕ СЃРµР»РµРєС‚ РЅР° СЃС‚РёР»СЊРЅС‹Р№
	autor: Evgen Ryzhkov
	updates by:
		- Alexey Choporov
		- Roman Omelkovitch
	using libs:
		- jScrollPane
		- mousewheel
	www.xiper.net
----------------------------------------*/
function cuSel(params) {
							
	jQuery(params.changedEl).each(
	function(num)
	{
	var chEl = jQuery(this),
		chElWid = chEl.outerWidth(), // С€РёСЂРёРЅР° СЃРµР»РµРєС‚Р°
		chElClass = chEl.prop("class"), // РєР»Р°СЃСЃ СЃРµР»РµРєС‚Р°
		chElId = chEl.prop("id"), // id
		chElName = chEl.prop("name"), // РёРјСЏ
		defaultVal = chEl.val(), // РЅР°С‡Р°Р»СЊРЅРѕРµ Р·РЅР°С‡РµРЅРёРµ
		activeOpt = chEl.find("option[value='"+defaultVal+"']").eq(0),
		defaultText = activeOpt.text(), // РЅР°С‡Р°Р»СЊРЅС‹Р№ С‚РµРєСЃС‚
		disabledSel = chEl.prop("disabled"), // Р·Р°Р±Р»РѕРєРёСЂРѕРІР°РЅ Р»Рё СЃРµР»РµРєС‚
		scrollArrows = params.scrollArrows,
		chElOnChange = chEl.prop("onchange"),
		chElTab = chEl.prop("tabindex"),
		chElMultiple = chEl.prop("multiple");
		
		if(!chElId || chElMultiple)	return false; // РЅРµ СЃС‚РёР»РёР·РёСЂСѓРµРј СЃРµР»РµРєС‚ РµСЃР»Рё РЅРµ Р·Р°РґР°РЅ id
		
		if(!disabledSel)
		{
			classDisCuselText = "", // РґР»СЏ РѕС‚СЃР»РµР¶РёРІР°РЅРёСЏ РєР»РёРєР° РїРѕ Р·Р°РґРёР·Р°Р№Р±Р»РµРЅРЅРѕРјСѓ СЃРµР»РµРєС‚Сѓ
			classDisCusel=""; // РґР»СЏ РѕС„РѕСЂРјР»РµРЅРёСЏ Р·Р°РґРёР·РµР№Р±Р»РµРЅРЅРѕРіРѕ СЃРµР»РµРєС‚Р°
		}
		else
		{
			classDisCuselText = "classDisCuselLabel";
			classDisCusel="classDisCusel";
		}
		
		if(scrollArrows)
		{
			classDisCusel+=" cuselScrollArrows";
		}
			
		activeOpt.addClass("cuselActive");  // Р°РєС‚РёРІРЅРѕРјСѓ РѕРїС‚РёРѕРЅСѓ СЃСЂР°Р·Сѓ РґРѕР±Р°РІР»СЏРµРј РєР»Р°СЃСЃ РґР»СЏ РїРѕРґСЃРІРµС‚РєРё
	
	var optionStr = chEl.html(), // СЃРїРёСЃРѕРє РѕРїС‚РёРѕРЅРѕРІ

		
	/* 
		РґРµР»Р°РµРј Р·Р°РјРµРЅСѓ С‚РµРіРѕРІ option РЅР° span, РїРѕР»РЅРѕСЃС‚СЊСЋ СЃРѕС…СЂР°РЅСЏСЏ РЅР°С‡Р°Р»СЊРЅСѓСЋ РєРѕРЅСЃС‚СЂСѓРєС†РёСЋ
	*/
	
	spanStr = optionStr.replace(/option/ig,"span").replace(/value=/ig,"val="); // value РјРµРЅСЏРµРј РЅР° val, С‚.Рє. jquery РѕС‚РєР°Р·С‹РІР°РµС‚СЃСЏ РІРѕСЃРїСЂРёРЅРёРјР°С‚СЊ value Сѓ span
	
	/* 
		РґР»СЏ IE РїСЂРѕСЃС‚Р°РІР»СЏРµРј РєР°РІС‹С‡РєРё РґР»СЏ Р·РЅР°С‡РµРЅРёР№, С‚.Рє. html() РІРѕР·СЂР°С‰Р°РµС‚ РєРѕРґ Р±РµР· РєР°РІС‹С‡РµРє
		С‡С‚Рѕ РїСЂРѕРёР·РѕС€Р»Р° РєРѕСЂСЂРµРєС‚РЅР°СЏ РѕР±СЂР°Р±РѕС‚РєР° value РґРѕР»Р¶РЅРѕ Р±С‹С‚СЊ РїРѕСЃР»РµРґРЅРёР№ Р°С‚СЂРёР±СѓС‚РѕРј option,
		РЅР°РїСЂРёРјРµСЂ <option class="country" id="ukraine" value="/ukrane/">РЈРєСЂР°РёРЅР°</option>
	*/


	
	/* РєР°СЂРєР°СЃ СЃС‚РёР»СЊРЅРѕРіРѕ СЃРµР»РµРєС‚Р°	*/
	var cuselFrame = '<div class="cusel '+chElClass+' '+classDisCusel+'"'+
					' id=cuselFrame-'+chElId+
					' style="width:'+chElWid+'px"'+
					' tabindex="'+chElTab+'"'+
					'>'+
					'<div class="cuselFrameRight"></div>'+
					'<div class="cuselText">'+defaultText+'</div>'+
					'<div class="cusel-scroll-wrap"><div class="cusel-scroll-pane" id="cusel-scroll-'+chElId+'">'+
					spanStr+
					'</div></div>'+
					'<input type="hidden" id="'+chElId+'" name="'+chElName+'" value="'+defaultVal+'" />'+
					'</div>';
					
					
	/* СѓРґР°Р»СЏРµРј РѕР±С‹С‡РЅС‹Р№ СЃРµР»РµРєС‚, РЅР° РµРіРѕ РјРµСЃС‚Рѕ РІСЃС‚Р°РІР»СЏРµРј СЃС‚РёР»СЊРЅС‹Р№ */
	chEl.replaceWith(cuselFrame);
	
	/* РµСЃР»Рё Р±С‹Р» РїРѕС†РµРїР»РµРЅ onchange - С†РµРїР»СЏРµРј РµРіРѕ РїРѕР»СЋ */
	if(chElOnChange) jQuery("#"+chElId).bind('change',chElOnChange);

	
	/*
		СѓСЃС‚Р°РЅР°Р»РёРІР°РµРј РІС‹СЃРѕС‚Сѓ РІС‹РїР°РґР°СЋС‰РёС… СЃРїРёСЃРєРѕРІ РѕСЃРЅРѕРІС‹РІР°СЏСЃСЊ РЅР° С‡РёСЃР»Рµ РІРёРґРёРјС‹С… РїРѕР·РёС†РёР№ Рё РІС‹СЃРѕС‚С‹ РѕРґРЅРѕР№ РїРѕР·РёС†РёРё
		РїСЂРё С‡РµРј С‚РѕР»СЊРєРѕ С‚РµРј, Сѓ РєРѕС‚РѕСЂС‹С… С‡РёСЃР»Рѕ РѕРїС‚РёРѕРЅРѕРІ Р±РѕР»СЊС€Рµ С‡РёСЃР»Р° Р·Р°РґР°РЅРЅРѕРіРѕ С‡РёСЃР»Р° РІРёРґРёРјС‹С…
	*/
	var newSel = jQuery("#cuselFrame-"+chElId),
		arrSpan = newSel.find("span"),
		defaultHeight;
		
		if(!arrSpan.eq(0).text())
		{
			defaultHeight = arrSpan.eq(1).innerHeight();
			arrSpan.eq(0).css("height", arrSpan.eq(1).height());
		} 
		else
		{
			defaultHeight = arrSpan.eq(0).innerHeight();
		}
		
	
	if(arrSpan.length>params.visRows)
	{
		newSel.find(".cusel-scroll-wrap").eq(0)
			.css({height: defaultHeight*params.visRows+"px", display : "none", visibility: "visible" })
			.children(".cusel-scroll-pane").css("height",defaultHeight*params.visRows+"px");
	}
	else
	{
		newSel.find(".cusel-scroll-wrap").eq(0)
			.css({display : "none", visibility: "visible" });
	}
	
	/* РІСЃС‚Р°РІР»СЏРµРј РІ РѕРїС‚РёРѕРЅС‹ РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ С‚РµРіРё */
	
	var arrAddTags = jQuery("#cusel-scroll-"+chElId).find("span[addTags]"),
		lenAddTags = arrAddTags.length;
		
		for(i=0;i<lenAddTags;i++) arrAddTags.eq(i)
										.append(arrAddTags.eq(i).attr("addTags"))
										.removeAttr("addTags");
										
	cuselEvents();
	
	});

/* ---------------------------------------
	РїСЂРёРІСЏР·РєР° СЃРѕР±С‹С‚РёР№ СЃРµР»РµРєС‚Р°Рј
------------------------------------------
*/
function cuselEvents() {
jQuery("html").unbind("click");

jQuery("html").click(
	function(e)
	{

		var clicked = jQuery(e.target),
			clickedId = clicked.attr("id"),
			clickedClass = clicked.prop("class");
			
		/* РµСЃР»Рё РєР»РёРєРЅСѓР»Рё РїРѕ СЃР°РјРѕРјСѓ СЃРµР»РµРєС‚Сѓ (С‚РµРєСЃС‚) */
		if((clickedClass.indexOf("cuselText")!=-1 || clickedClass.indexOf("cuselFrameRight")!=-1) && clicked.parent().prop("class").indexOf("classDisCusel")==-1)
		{
			var cuselWrap = clicked.parent().find(".cusel-scroll-wrap").eq(0);
			
			/* РµСЃР»Рё РІС‹РїР°РґР°СЋС‰РµРµ РјРµРЅСЋ СЃРєСЂС‹С‚Рѕ - РїРѕРєР°Р·С‹РІР°РµРј */
			cuselShowList(cuselWrap);
		}
		/* РµСЃР»Рё РєР»РёРєРЅСѓР»Рё РїРѕ СЃР°РјРѕРјСѓ СЃРµР»РµРєС‚Сѓ (РєРѕРЅС‚РµР№РЅРµСЂ) */
		else if(clickedClass.indexOf("cusel")!=-1 && clickedClass.indexOf("classDisCusel")==-1 && clicked.is("div"))
		{
	
			var cuselWrap = clicked.find(".cusel-scroll-wrap").eq(0);
			
			/* РµСЃР»Рё РІС‹РїР°РґР°СЋС‰РµРµ РјРµРЅСЋ СЃРєСЂС‹С‚Рѕ - РїРѕРєР°Р·С‹РІР°РµРј */
			cuselShowList(cuselWrap);
	
		}
		
		/* РµСЃР»Рё РІС‹Р±СЂР°Р»Рё РїРѕР·РёС†РёСЋ РІ СЃРїРёСЃРєРµ */
		else if(clicked.is(".cusel-scroll-wrap span") && clickedClass.indexOf("cuselActive")==-1)
		{
			var clickedVal;
			(clicked.attr("val") == undefined) ? clickedVal=clicked.text() : clickedVal=clicked.attr("val");
			clicked
				.parents(".cusel-scroll-wrap").find(".cuselActive").eq(0).removeClass("cuselActive")
				.end().parents(".cusel-scroll-wrap")
				.next().val(clickedVal)
				.end().prev().text(clicked.text())
				.end().css("display","none")
				.parent(".cusel").removeClass("cuselOpen");
			clicked.addClass("cuselActive");
			clicked.parents(".cusel-scroll-wrap").find(".cuselOptHover").removeClass("cuselOptHover");
			if(clickedClass.indexOf("cuselActive")==-1)	clicked.parents(".cusel").find(".cusel-scroll-wrap").eq(0).next("input").change(); // С‡С‚РѕР±С‹ СЃСЂР°Р±Р°С‚С‹РІР°Р» onchange
		}
		
		else if(clicked.parents(".cusel-scroll-wrap").is("div"))
		{
			return;
		}
		
		/*
			СЃРєСЂС‹РІР°РµРј СЂР°СЃРєСЂС‹С‚С‹Рµ СЃРїРёСЃРєРё, РµСЃР»Рё РєР»РёРєРЅСѓР»Рё РІРЅРµ СЃРїРёСЃРєР°
		*/
		else
		{
			jQuery(".cusel-scroll-wrap")
				.css("display","none")
				.parent(".cusel").removeClass("cuselOpen");
		}
		

		
	});

jQuery(".cusel").unbind("keydown"); /* С‡С‚РѕР±С‹ РЅРµ Р±С‹Р»Рѕ РґРІР»Р№РЅРѕРіРѕ СЃСЂР°Р±Р°С‚С‹РІР°РЅРёСЏ СЃРѕР±С‹С‚РёСЏ */

jQuery(".cusel").keydown(
function(event)
{
	
	/*
		РµСЃР»Рё СЃРµР»РµРєС‚ Р·Р°РґРёР·Р°Р№Р±Р»РёРЅ, СЃ РЅРµ РіРѕ СЂР°Р±РѕС‚Р°РµС‚ С‚РѕР»СЊРєРѕ С‚Р°Р±
	*/
	var key, keyChar;
		
	if(window.event) key=window.event.keyCode;
	else if (event) key=event.which;
	
	if(key==null || key==0 || key==9) return true;
	
	if(jQuery(this).prop("class").indexOf("classDisCusel")!=-1) return false;
		
	/*
		РµСЃР»Рё РЅР°Р¶Р°Р»Рё СЃС‚СЂРµР»РєСѓ РІРЅРёР·
	*/
	if(key==40)
	{
		var cuselOptHover = jQuery(this).find(".cuselOptHover").eq(0);
		if(!cuselOptHover.is("span")) var cuselActive = jQuery(this).find(".cuselActive").eq(0);
		else var cuselActive = cuselOptHover;
		var cuselActiveNext = cuselActive.next();
			
		if(cuselActiveNext.is("span"))
		{
			jQuery(this)
				.find(".cuselText").eq(0).text(cuselActiveNext.text());
			cuselActive.removeClass("cuselOptHover");
			cuselActiveNext.addClass("cuselOptHover");
			
			$(this).find("input").eq(0).val(cuselActiveNext.attr("val"));
					
			/* РїСЂРѕРєСЂСѓС‡РёРІР°РµРј Рє С‚РµРєСѓС‰РµРјСѓ РѕРїС‚РёРѕРЅСѓ */
			cuselScrollToCurent($(this).find(".cusel-scroll-wrap").eq(0));
			
			return false;
		}
		else return false;
	}
	
	/*
		РµСЃР»Рё РЅР°Р¶Р°Р»Рё СЃС‚СЂРµР»РєСѓ РІРІРµСЂС…
	*/
	if(key==38)
	{
		var cuselOptHover = $(this).find(".cuselOptHover").eq(0);
		if(!cuselOptHover.is("span")) var cuselActive = $(this).find(".cuselActive").eq(0);
		else var cuselActive = cuselOptHover;
		cuselActivePrev = cuselActive.prev();
			
		if(cuselActivePrev.is("span"))
		{
			$(this)
				.find(".cuselText").eq(0).text(cuselActivePrev.text());
			cuselActive.removeClass("cuselOptHover");
			cuselActivePrev.addClass("cuselOptHover");
			
			$(this).find("input").eq(0).val(cuselActivePrev.attr("val"));
			
			/* РїСЂРѕРєСЂСѓС‡РёРІР°РµРј Рє С‚РµРєСѓС‰РµРјСѓ РѕРїС‚РёРѕРЅСѓ */
			cuselScrollToCurent($(this).find(".cusel-scroll-wrap").eq(0));
			
			return false;
		}
		else return false;
	}
	
	/*
		РµСЃР»Рё РЅР°Р¶Р°Р»Рё esc
	*/
	if(key==27)
	{
		var cuselActiveText = $(this).find(".cuselActive").eq(0).text();
		$(this)
			.removeClass("cuselOpen")
			.find(".cusel-scroll-wrap").eq(0).css("display","none")
			.end().find(".cuselOptHover").eq(0).removeClass("cuselOptHover");
		$(this).find(".cuselText").eq(0).text(cuselActiveText);

	}
	
	/*
		РµСЃР»Рё РЅР°Р¶Р°Р»Рё enter
	*/
	if(key==13)
	{
		
		var cuselHover = $(this).find(".cuselOptHover").eq(0);
		if(cuselHover.is("span"))
		{
			$(this).find(".cuselActive").removeClass("cuselActive");
			cuselHover.addClass("cuselActive");
		}
		else var cuselHoverVal = $(this).find(".cuselActive").attr("val");
		
		$(this)
			.removeClass("cuselOpen")
			.find(".cusel-scroll-wrap").eq(0).css("display","none")
			.end().find(".cuselOptHover").eq(0).removeClass("cuselOptHover");
		$(this).find("input").eq(0).change();
	}
	
	/*
		РµСЃР»Рё РЅР°Р¶Р°Р»Рё РїСЂРѕР±РµР» Рё СЌС‚Рѕ РѕРїРµСЂР° - СЂР°СЃРєСЂС‹РІРµРј СЃРїРёСЃРѕРє
	*/
	if(key==32 && $.browser.opera)
	{
		var cuselWrap = $(this).find(".cusel-scroll-wrap").eq(0);
		
		/* СЂР°РєСЂС‹РІР°РµРј СЃРїРёСЃРѕРє */
		cuselShowList(cuselWrap);
	}
		
	if($.browser.opera) return false; /* СЃРїРµС†РёР°Р»СЊРЅРѕ РґР»СЏ РѕРїРµСЂР°, С‡С‚РѕР± РїСЂРё РЅР°Р¶Р°С‚РёРёРё РЅР° РєР»Р°РІРёС€Рё РЅРµ РїСЂРѕРєСЂСѓС‡РёРІР°Р»РѕСЃСЊ РѕРєРЅРѕ Р±СЂР°СѓР·РµСЂР° */

});

/*
	С„СѓРЅРєС†РёСЏ РѕС‚Р±РѕСЂР° РїРѕ РЅР°Р¶Р°С‚С‹Рј СЃРёРјРІРѕР»Р°Рј (РѕС‚ Alexey Choporov)
	РѕС‚Р±РѕСЂ РёРґРµС‚ РїРѕРєР° РїР°СѓР·Р° РјРµР¶РґСѓ РЅР°Р¶Р°С‚РёСЏРјРё СЃРёРІРѕР»РѕРІ РЅРµ Р±СѓРґРµС‚ Р±РѕР»СЊС€Рµ 0.5 СЃРµРє
	keypress РЅСѓР¶РµРЅ РґР»СЏ РѕС‚Р»РѕРІР° СЃРёРјРІРѕР»Р° РЅР°Р¶Р°С‚РѕР№ РєР»Р°РІРёС€
*/
var arr = [];
jQuery(".cusel").keypress(function(event)
{
	var key, keyChar;
		
	if(window.event) key=window.event.keyCode;
	else if (event) key=event.which;
	
	if(key==null || key==0 || key==9) return true;
	
	if(jQuery(this).prop("class").indexOf("classDisCusel")!=-1) return false;
	
	var o = this;
	arr.push(event);
	clearTimeout(jQuery.data(this, 'timer'));
	var wait = setTimeout(function() { handlingEvent() }, 500);
	jQuery(this).data('timer', wait);
	function handlingEvent()
	{
		var charKey = [];
		for (var iK in arr)
		{
			if(window.event)charKey[iK]=arr[iK].keyCode;
			else if(arr[iK])charKey[iK]=arr[iK].which;
			charKey[iK]=String.fromCharCode(charKey[iK]).toUpperCase();
		}
		var arrOption=jQuery(o).find("span"),colArrOption=arrOption.length,i,letter;
		for(i=0;i<colArrOption;i++)
		{
			var match = true;
			for (var iter in arr)
			{
				letter=arrOption.eq(i).text().charAt(iter).toUpperCase();
				if (letter!=charKey[iter])
				{
					match=false;
				}
			}
			if(match)
			{
				jQuery(o).find(".cuselOptHover").removeClass("cuselOptHover").end().find("span").eq(i).addClass("cuselOptHover").end().end().find(".cuselText").eq(0).text(arrOption.eq(i).text());
			
			/* РїСЂРѕРєСЂСѓС‡РёРІР°РµРј Рє С‚РµРєСѓС‰РµРјСѓ РѕРїС‚РёРѕРЅСѓ */
			cuselScrollToCurent($(o).find(".cusel-scroll-wrap").eq(0));
			arr = arr.splice;
			arr = [];
			break;
			return true;
			}
		}
		arr = arr.splice;
		arr = [];
	}
	if(jQuery.browser.opera && window.event.keyCode!=9) return false;
});
								
}
	
jQuery(".cusel").focus(
function()
{
	jQuery(this).addClass("cuselFocus");
	
});

jQuery(".cusel").blur(
function()
{
	jQuery(this).removeClass("cuselFocus");
});

jQuery(".cusel").hover(
function()
{
	jQuery(this).addClass("cuselFocus");
},
function()
{
	jQuery(this).removeClass("cuselFocus");
});

}

function cuSelRefresh(params)
{
	/*
		СѓСЃС‚Р°РЅР°Р»РёРІР°РµРј РІС‹СЃРѕС‚Сѓ РІС‹РїР°РґР°СЋС‰РёС… СЃРїРёСЃРєРѕРІ РѕСЃРЅРѕРІС‹РІР°СЏСЃСЊ РЅР° С‡РёСЃР»Рµ РІРёРґРёРјС‹С… РїРѕР·РёС†РёР№ Рё РІС‹СЃРѕС‚С‹ РѕРґРЅРѕР№ РїРѕР·РёС†РёРё
		РїСЂРё С‡РµРј С‚РѕР»СЊРєРѕ С‚РµРј, Сѓ РєРѕС‚РѕСЂС‹С… С‡РёСЃР»Рѕ РѕРїС‚РёРѕРЅРѕРІ Р±РѕР»СЊС€Рµ С‡РёСЃР»Р° Р·Р°РґР°РЅРЅРѕРіРѕ С‡РёСЃР»Р° РІРёРґРёРјС‹С…
	*/


	var arrRefreshEl = params.refreshEl.split(","),
		lenArr = arrRefreshEl.length,
		i;
	
	for(i=0;i<lenArr;i++)
	{
		var refreshScroll = jQuery(arrRefreshEl[i]).parents(".cusel").find(".cusel-scroll-wrap").eq(0);
		refreshScroll.find(".cusel-scroll-pane").jScrollPaneRemoveCusel();
		refreshScroll.css({visibility: "hidden", display : "block"});
	
		var	arrSpan = refreshScroll.find("span"),
			defaultHeight = arrSpan.eq(0).outerHeight();
		
	
		if(arrSpan.length>params.visRows)
		{
			refreshScroll
				.css({height: defaultHeight*params.visRows+"px", display : "none", visibility: "visible" })
				.children(".cusel-scroll-pane").css("height",defaultHeight*params.visRows+"px");
		}
		else
		{
			refreshScroll
				.css({display : "none", visibility: "visible" });
		}
	}
	
}
/*
	С„СѓРєС†РёСЏ СЂР°СЃРєСЂС‹С‚РёСЏ/СЃРєСЂС‹С‚РёСЏ СЃРїРёСЃРєР° 
*/
function cuselShowList(cuselWrap)
{
	var cuselMain = cuselWrap.parent(".cusel");
	
	/* РµСЃР»Рё РІС‹РїР°РґР°СЋС‰РµРµ РјРµРЅСЋ СЃРєСЂС‹С‚Рѕ - РїРѕРєР°Р·С‹РІР°РµРј */
	if(cuselWrap.css("display")=="none")
	{
		$(".cusel-scroll-wrap").css("display","none");
		
		cuselMain.addClass("cuselOpen");
		cuselWrap.css("display","block");
		var cuselArrows = false;
		if(cuselMain.prop("class").indexOf("cuselScrollArrows")!=-1) cuselArrows=true;
		if(!cuselWrap.find(".jScrollPaneContainer").eq(0).is("div"))
		{
			cuselWrap.find("div").eq(0).jScrollPaneCusel({showArrows:cuselArrows});
		}
				
		/* РїСЂРѕРєСЂСѓС‡РёРІР°РµРј Рє С‚РµРєСѓС‰РµРјСѓ РѕРїС‚РёРѕРЅСѓ */
		cuselScrollToCurent(cuselWrap);
		}
		else
		{
			cuselWrap.css("display","none");
			cuselMain.removeClass("cuselOpen");
		}
}


/*
	С„СѓРЅРєС†РёСЏ РїСЂРѕРєСЂСѓС‚РєРё Рє С‚РµРєСѓС‰РµРјСѓ СЌР»РµРјРµРЅС‚Сѓ
*/
function cuselScrollToCurent(cuselWrap)
{
	var cuselScrollEl = null;
	if(cuselWrap.find(".cuselOptHover").eq(0).is("span")) cuselScrollEl = cuselWrap.find(".cuselOptHover").eq(0);
	else if(cuselWrap.find(".cuselActive").eq(0).is("span")) cuselScrollEl = cuselWrap.find(".cuselActive").eq(0);

	if(cuselWrap.find(".jScrollPaneTrack").eq(0).is("div") && cuselScrollEl)
	{
		
		var posCurrentOpt = cuselScrollEl.position(),
			idScrollWrap = cuselWrap.find(".cusel-scroll-pane").eq(0).attr("id");

		jQuery("#"+idScrollWrap)[0].scrollTo(posCurrentOpt.top);	
	
	}	
}
