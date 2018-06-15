(function(window){var svgSprite='<svg><symbol id="icon-close-o" viewBox="0 0 1024 1024"><path d="M512 69.818182c-257.070545 0-465.454545 208.384-465.454545 465.454545 0 257.070545 208.384 465.454545 465.454545 465.454545 257.070545 0 465.454545-208.384 465.454545-465.454545C977.454545 278.202182 769.070545 69.818182 512 69.818182zM512 954.181818c-231.377455 0-418.909091-187.531636-418.909091-418.909091 0-231.377455 187.531636-418.909091 418.909091-418.909091 231.377455 0 418.909091 187.531636 418.909091 418.909091C930.909091 766.650182 743.377455 954.181818 512 954.181818zM725.922909 321.349818c-9.076364-9.076364-23.831273-9.076364-32.907636 0L512 502.365091 330.984727 321.349818c-9.076364-9.076364-23.831273-9.076364-32.907636 0-9.076364 9.076364-9.076364 23.831273 0 32.907636l181.015273 181.015273-181.015273 181.015273c-9.076364 9.076364-9.076364 23.831273 0 32.907636 9.076364 9.076364 23.831273 9.076364 32.907636 0L512 568.180364l181.015273 181.015273c9.076364 9.076364 23.831273 9.076364 32.907636 0 9.076364-9.076364 9.076364-23.831273 0-32.907636L544.907636 535.272727l181.015273-181.015273C734.999273 345.181091 734.999273 330.426182 725.922909 321.349818z"  ></path></symbol><symbol id="icon-mima" viewBox="0 0 1024 1024"><path d="M522.368 10.3936c-144.1536 0-252.9024 114.6624-252.9024 266.752l0 93.7472-8.192 0c-75.776 0-137.4464 63.3088-137.4464 141.0816l0 360.5248c0 77.7728 61.6704 141.1072 137.4464 141.1072l524.3392 0c75.776 0 137.4464-63.3344 137.4464-141.1072L923.0592 511.9744c0-77.7728-61.6704-141.0816-137.4464-141.0816l-4.5056 0c-1.2032-0.4352-2.4576-0.5632-3.712-0.768l0-93.0048C777.4464 125.0816 667.8016 10.3936 522.368 10.3936L522.368 10.3936zM522.368 52.224c123.52 0 213.248 94.592 213.248 224.9472l0 92.3648L311.3216 369.536l0-92.3648C311.3216 146.816 400.0768 52.224 522.368 52.224L522.368 52.224zM881.28 511.9744l0 360.5248c0 54.7328-42.9312 99.2768-95.616 99.2768L261.2992 971.776c-52.736 0-95.616-44.544-95.616-99.2768L165.6832 511.9744c0-54.7072 42.88-99.2512 95.616-99.2512l50.0224 0 0-1.3824 424.2688 0 0 1.3824 50.048 0C838.3488 412.7488 881.28 457.2672 881.28 511.9744L881.28 511.9744zM881.28 511.9744M518.8608 568.0384c-33.5104 0-60.672 28.0064-60.672 62.5664 0 23.1168 12.2368 43.3408 30.336 54.1696l0 102.1952c0 17.2544 13.568 31.3088 30.336 31.3088 16.7424 0 30.336-14.0544 30.336-31.3088L549.1968 684.8c18.0992-10.8288 30.3104-31.0272 30.3104-54.1696C579.456 596.0704 552.32 568.0384 518.8608 568.0384L518.8608 568.0384zM518.8608 568.0384"  ></path></symbol><symbol id="icon-yonghu" viewBox="0 0 1024 1024"><path d="M593.066667 499.2C695.466667 465.066667 768 369.066667 768 256c0-140.8-115.2-256-256-256S256 115.2 256 256c0 113.066667 72.533333 209.066667 174.933333 243.2C249.6 535.466667 85.333333 689.066667 85.333333 874.666667c0 83.2 66.133333 149.333333 149.333334 149.333333h554.666666c83.2 0 149.333333-66.133333 149.333334-149.333333 0-185.6-164.266667-339.2-345.6-375.466667zM298.666667 256c0-117.333333 96-213.333333 213.333333-213.333333s213.333333 96 213.333333 213.333333-96 213.333333-213.333333 213.333333-213.333333-96-213.333333-213.333333z m490.666666 725.333333H234.666667c-59.733333 0-106.666667-46.933333-106.666667-106.666666 0-196.266667 202.666667-341.333333 384-341.333334s384 145.066667 384 341.333334c0 59.733333-46.933333 106.666667-106.666667 106.666666z" fill="#666767" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)