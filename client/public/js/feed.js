document.addEventListener('DOMContentLoaded', function() {
    function goToMaristEdu() {
        goToLocation('http://my.marist.edu');
    }

    document.getElementById('portal_button').addEventListener('click', goToMaristEdu);

    document.getElementById('portal_button_text').addEventListener('click', goToMaristEdu);
});

let currentStories = [];

/*
function feedItem(title, body, link, image) {
    this.title = title;
    this.body = body;
    this.link = link;
    this.image = image;
    
    
}
let post1 = new feedItem();

post1.body = "Body 1",
post1.title = "Marist story 1",
post1.link = "http://example.com/story1",
post1.image = "images/campus.png",

currentStories.push(post1);

*/

    currentStories.push({
        Title: 'Marist Story 1',
        Body: 'This is a Story about the history of Marist',
        linkUrl: 'https://example.com/story1',
        imageUrl: 'images//campus.png'
    });

    currentStories.push({
        Title: 'Marist Story 2',
        Body: 'This is Recent News About things that happened at Marist',
        linkUrl: 'https://example.com/story2',
        imageUrl: 'images/news_pic.jpg'
    });

    currentStories.push({
        Title: 'Marist Story 3',
        Body: 'This is a Story About Marist',
        linkUrl: 'https://example.com/story3',
        imageUrl: 'images/hancock.jpeg'
    });

    console.log(currentStories);

    function displayItem(feedItem) {
        let newsfeedElement = document.getElementById('newfeed');

        let itemHTML = `
            <div class="feed-item">
                <h2><a href=${feedItem.linkUrl}" target="_blank">${feedItem.Title}</a></h2>
                <p>${feedItem.Body}</p>
                <a href="${feedItem.linkUrl}" target="_blank">
                    <img id="feed_Photo" src="${feedItem.imageUrl}" alt="${feedItem.Title}" >
                </a>    
            </div>
        `;
    
        newsfeedElement.innerHTML += itemHTML;
    }  
    
    currentStories.forEach(function(item) {
        displayItem(item);
    });    
        
        
        
        
        