let rys_none = `var VUUKLE_CONFIG = {
    apiKey: 'f5551baf-79af-444d-bf17-c3d36a675655',
    articleId: document.location.pathname.replace('.html',''),
  };
`;

var tolstoy_comments = `
<script type="text/javascript">!(function(w,d,s,l,x){w[l]=w[l]||[];w[l].t=w[l].t||new Date().getTime();var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=!0;j.src='//web.tolstoycomments.com/sitejs/app.js?i='+l+'&x='+x+'&t='+w[l].t;f.parentNode.insertBefore(j,f);})(window,document,'script','tolstoycomments','3970');</script>

<div class="tolstoycomments-feed"></div>
<script type="text/javascript">
	window['tolstoycomments'] = window['tolstoycomments'] || [];
	window['tolstoycomments'].push({
		action: 'init',
		values: {
			visible: true
		}
	});
</script>`;

//Feed button
document.getElementsByClassName('rss')[0].setAttribute('href', 'https://feedly.com/i/subscription/feed%2F'+document.location.origin+'/feeds/posts/default%3Falt%3Drss');

//Preloader and search button

          document.addEventListener("DOMContentLoaded", () => {
	          setTimeout(() => document.getElementsByClassName('preloader')[0].classList.add('opacity'), 0);
			  setTimeout(() => document.getElementsByClassName('preloader')[0].remove(), 2000);
          });
          document.getElementsByClassName('search_btn')[0].onclick = function(){
              document.getElementsByClassName('search__box')[0].submit();
          }
          
//Processing post styles
document.addEventListener("DOMContentLoaded", () => {
var comments__not = `.post__post {
    width: 100%;
    display: flex;
    border: none;
    flex-grow: 1;
    flex-wrap: wrap;
    justify-content: center;
}

.post__post > .date-outer {
    width: 300px;
    margin: 20px 10px;
    border: 1px solid #dedede;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    height: auto;
}

span.post__tags {
    height: -webkit-fill-available;
    height: -moz-fill-available;
}`;
var comments__styles = `.blog-posts.hfeed > .post__post {
    max-width: 700px;
    width: 100%;
    padding: 10px 20px;
    justify-content: center !important;
}

.post-outer {
    width: 100%;
}

.date-posts {
    width: 100%;
}

.date-outer {
    width: 100%;
}

.blog-posts.hfeed .date-header span {
    color: #6c6c6c;
    font-size: 14px;
    text-align: right;
    width: 100%;
}

.blog-posts.hfeed .date-header {
    text-align: right;
    padding: 10px 20px;
}

.blog-posts.hfeed h3.post-title.entry-title {
    font-size: 25px;
    width: 100%;
    height: 10px;
    text-align: center;
    padding: 5% 0px;
}

.post-body.entry-content > .separator > a {
    width: calc(100%);
    display: block;
    margin: 0px !important;
}

.post__post img:nth-child(1) {
    width: 100% !important;
}

.blog-posts.hfeed {
    width: 100%;
    display: flex;
    justify-content: center;
}

.comments {
    padding: 10px 20px;
    border: 1px solid #dedede;
    border-radius: 5px;
}`;
function make_tags(ddf){
    let all_tags = ddf.getElementsByClassName('post-labels')[0].getElementsByTagName('a');
    let strd = '';
    for (let k in all_tags){
        let elem = all_tags[k];
        try{
            elem.setAttribute('hyperlink','on');
            strd+='<a class="tag__des" href="'+elem.href+'">'+elem.innerText+'</a>';
        }catch{
            let r = [''];
        }
    }
    return strd;
}
try{
	document.getElementsByClassName('comments')[0].setAttribute('comments', 'on');
  let r = document.createElement('div');
  r.innerHTML = '<style>'+comments__styles+'</style>';
  document.getElementsByClassName('comments')[0].innerHTML = tolstoy_comments;
  document.getElementsByClassName('comments')[0].append(r);  

  !(function(w,d,s,l,x){w[l]=w[l]||[];w[l].t=w[l].t||new Date().getTime();var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=!0;j.src='//web.tolstoycomments.com/sitejs/app.js?i='+l+'&x='+x+'&t='+w[l].t;f.parentNode.insertBefore(j,f);})(window,document,'script','tolstoycomments','3970');
}catch (e){
  let ryu = document.createElement('div');
  ryu.innerHTML = '<style>'+comments__not+'</style>';
  document.body.append(ryu);
}
let posts = document.getElementsByClassName('date-outer');
for (let k in posts){
    let elem = posts[k];
    try{
        elem.setAttribute('transformed', 'true');
        let title = elem.getElementsByClassName('post-title')[0].innerText;
        let link = elem.getElementsByClassName('post-title')[0].getElementsByTagName('a')[0].href;
        let description = elem.getElementsByClassName('post-body')[0].innerText.trim();
        let date = elem.getElementsByClassName('date-header')[0].innerText;
        let author = elem.getElementsByClassName('g-profile')[0].innerText;
        if (author){
		author = 'Weebys';
	}
	let image = '';
        try{
            image = elem.getElementsByTagName('img')[0].src;
        }catch{
            image = '';
        }
        elem.innerHTML =  `
            <a class="post__post__link" href="`+link+`">
           <div class="post__image" style="background-image: url('`+image+`');"></div>
                <div class="flex__divided">
                    <div class="post__author">`+author+`</div>
                    <div class="post__date">`+date+`</div>
                </div>
                <div class="post__title">
                    `+title+`
                </div>
                <div class="post__description">
                    `+description+`
                </div>
            </a>
  <span class="post__tags">
                    `+make_tags(elem)+`
                </span>
        `;
    }catch (e){
        console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
    }
}
});

//Trigger description

document.addEventListener("DOMContentLoaded", () => {
var params = window
    .location
    .search
    .replace('?','')
    .split('&')
    .reduce(
        function(p,e){
            var a = e.split('=');
            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );

if (params["embed"]){
    if (params["dark"]){
      let dark_styles = ``;
      let r  = document.createElement('div');
      r.innerHTML = '<style>'+dark_styles+'</style>';
    	document.body.append(r);
    }
    document.getElementsByClassName('header_header')[0].style='display:none';
    document.getElementsByClassName('labeled__tags')[0].style = 'display:none';

document.getElementsByClassName('blog-pager')[0].style = 'display:none';

document.getElementsByClassName('post-feeds')[0].style = 'display:none';
    try{
	    document.getElementsByClassName('comments')[0].style='display:none';
    }catch{
      
    }
}
});

try{
document.getElementsByClassName('trigger_closer')[0].onclick = function(){
    if (this.classList.contains('closed')){
        this.classList.remove('closed');
        document.getElementsByClassName('right_field')[0].classList.remove('closed');
    }else{
        this.classList.add('closed');
        document.getElementsByClassName('right_field')[0].classList.add('closed');
    }
}
}catch{
let tyg = 0;
}
