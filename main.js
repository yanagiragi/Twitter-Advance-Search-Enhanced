function __main__ ()
{
    // get last download button
    let target = $('.SidebarFilterModule-header')[0]
    let btnText = `
    <div role="search" style="padding-top: 10px;">
        <form class="t1-form form-search js-search-form" action="/search" id="global-nav-search">
            <label for="search-query">搜尋條件</label>
            <input class="search-input" type="text" id="yr-search-query" placeholder="Twitter ID" name="q" autocomplete="off" spellcheck="false" aria-autocomplete="list" aria-expanded="false" aria-owns="typeahead-dropdown-1" dir="ltr" style="direction: ltr; text-align: left;">
            <span class="search-icon js-search-action">
                <button type="submit" id="yrBtn" class="Icon Icon--medium Icon--search nav-search" tabindex="-1" style="padding-left: 12px;">
                <span class="visuallyhidden">搜尋 Twitter</span>
                </button>
            </span>
            <div style="padding-top: 12px;">
                <label for="yr-since-query">Since</label>
                <input class="search-input" type="text" id="yr-since-query" placeholder="開始時間" name="s" autocomplete="off" spellcheck="false" aria-autocomplete="list" aria-expanded="false" aria-owns="typeahead-dropdown-1" dir="ltr" style="direction: ltr; text-align: left;">
            </div>
            <div style="padding-top: 12px;">
                <label for="yr-until-query">Until</label>
                <input style="margin-left: 3px;" class="search-input" type="text" id="yr-until-query" placeholder="結束時間" name="u" autocomplete="off" spellcheck="false" aria-autocomplete="list" aria-expanded="false" aria-owns="typeahead-dropdown-1" dir="ltr" style="direction: ltr; text-align: left;">
            </div
        </form>
  </div>`
  
    // For C95
    // Value hardcodes on input element
    // For "Last Page" input value clear issue
    let c95BtnText = `
    <div role="search" style="padding-top: 10px;">
        <form class="t1-form form-search js-search-form" action="/search" id="global-nav-search">
            <label for="search-query">搜尋條件</label>
            <input class="search-input" type="text" id="yr-search-query" placeholder="Twitter ID" name="q" autocomplete="off" spellcheck="false" aria-autocomplete="list" aria-expanded="false" aria-owns="typeahead-dropdown-1" dir="ltr" style="direction: ltr; text-align: left;">
            <span class="search-icon js-search-action">
                <button type="submit" id="yrBtn" class="Icon Icon--medium Icon--search nav-search" tabindex="-1" style="padding-left: 12px;">
                <span class="visuallyhidden">搜尋 Twitter</span>
                </button>
            </span>
            <div style="padding-top: 12px;">
                <label for="yr-since-query">Since</label>
                <input class="search-input" type="text" id="yr-since-query" placeholder="開始時間" name="s" autocomplete="off" spellcheck="false" aria-autocomplete="list" aria-expanded="false" aria-owns="typeahead-dropdown-1" dir="ltr" style="direction: ltr; text-align: left;" value="2018-08-10">
            </div>
            <div style="padding-top: 12px;">
                <label for="yr-until-query">Until</label>
                <input style="margin-left: 3px;" class="search-input" type="text" id="yr-until-query" placeholder="結束時間" name="u" autocomplete="off" spellcheck="false" aria-autocomplete="list" aria-expanded="false" aria-owns="typeahead-dropdown-1" dir="ltr" style="direction: ltr; text-align: left;"  value="2018-08-12">
            </div
        </form>
  </div>`

    // For C95
    let btn = $(target).append(c95BtnText)
    
    $('#yrBtn').click(event => {
        event.preventDefault()
        event.stopPropagation()
        
        let author = $('#yr-search-query')[0].value
        let since = $('#yr-since-query')[0].value
        let until = $('#yr-until-query')[0].value
        let query = `from:${author} since:${since} until:${until}`
        
        $('#search-query')[0].value = query

        //$('.search-icon > button')[0].click()

        // instead using native way (button.click)
        // we use direct modified location.href to force change page
        // since native way works like Single-Page-Application (Not Comfirmed yet)
        // trying to detect whether should inject or not is so much work (Not Really, Just LAZY)
        location.href = `https://twitter.com/search?q=from%3A${author}%20since%3A${since}%20until%3A${until}&src=typd&lang=zh-tw`
    });

    if($('.SidebarFilterModule-toggle')[0].innerHTML.trim() === '顯示'){
        console.log('Expand 搜尋篩選條件')    
        $('.SidebarFilterModule-toggle')[0].click()
    }
}

const $ = jQuery.noConflict()
$(document).ready(__main__)