let questionArray = [
    //question 1
    {
        questionText: '1. What are the official words of House Lannister?',
        questionChoices: ['A Lannister always pays his debts', 'As High as Honor', 'Hear me roar!', 'Fire and Blood'],
        questionCorrectChoice: 2,
        correctDetails: `"Hear me roar!" are the official words of House Lannister, used much less frequently than their unofficial motto, "A Lannister always pays his debts'`
    },
    //question 2
    {
        questionText: '2. How high is the Wall?',
        questionChoices: ['2000 feet', '1200 feet', '700 feet', '500 feet'],
        questionCorrectChoice: 2,
        correctDetails: 'The wall is 700 feet tall, and it was built roughly 8000 years prior to the setting, by Bran the Builder of the Stark family'
    },
    //question 3
    {
        questionText: `3. Who saves Samwell Tarly, Gilly, and her baby after fleeing Craster's keep>`,
        questionChoices: ['Coldhands', 'Bran warged into Summer', 'Lady Stonehart', 'Three Eyed Raven'],
        questionCorrectChoice: 0,
        correctDetails: 'Coldhands, popularly believed to be Benjen Stark, but whose identity is still unknown, saves the group and helps them make it to Bran.'
    },
    //question 4
    {
        questionText: '4. In which city does Danaerys obtain the Unsullied army?',
        questionChoices: ['Mereen', 'Astapor', 'Yunkai', 'Qarth'],
        questionCorrectChoice: 1,
        correctDetails: 'Danaerys obtains this army in Astapor after trading a dragon for it, only to turn the dragon against the slave masters.'
    },
    //question 5
    {
        questionText: '5. What term of endearment does Cersei use for Sansa upon her arrival in the capital?',
        questionChoices: ['Little bird', 'Little dove', 'Little one', 'Little sparrow'],
        questionCorrectChoice: 1,
        correctDetails: `Sansa catches on that Cersei's words, 'little dove' are merely for show and that she is a true enemy of her family.`
    },
    //question 6
    {
        questionText: '6. During which battle was Rhaegar Targaryen struck down?',
        questionChoices: ['Battle of the Seven Stars', 'Battle of Blackwater', 'Battle of the Trident', 'Battle of Ashford'],
        questionCorrectChoice: 2,
        correctDetails: `Robert Baratheon caved in Rhaegar's breastplate at the Battle of the Trident, a war begun by the "capture" of Lyanna Stark.`
    },
    //question 7
    {
        questionText: '7. Which Greyjoy has returned from a saling expedition with a dragon horn?',
        questionChoices: ['Aeron Greyhoy', 'Euron Greyjoy', 'Balon Greyjoy', 'Victarion Greyjoy'],
        questionCorrectChoice: 3,
        correctDetails: `The "Dragonbinder" is a mysetrious artifact retrieved by Victarion from the smoking ruins of Valyria.`
    },
    //question 8
    {
        questionText: `8. Jaqen H'ghar offers Arya three lives in exchange for the ones she saved. Who doesn't Arya request he kill?`,
        questionChoices: ['Ser Amory Lorch', 'Tywin Lannister', `Jaqen H'ghar`, 'The Tickler'],
        questionCorrectChoice: 1,
        correctDetails: 'Frustrated that Tywin departed Harrenhall before she could kill him, Arya asks Jaqen for help in escaping, but he refuses as its outsides the bounds of his offer. She counters by naming him as a target.'
    },
    //question 9
    {
        questionText: '9. What alias does Tyrion assume on his journey to Volantis?',
        questionChoices: ['Oppo', 'Griff', 'Penny', 'Yollo'],
        questionCorrectChoice: 3,
        correctDetails: `Tyrion travels under the alias "Yollo" as he is wanted for the murder of father, and Cersei has put a hefty price on his head. He is eventually captured.`
    },
    //question 10
    {
        questionText: `10. How many Lord Commanders of the Night's Watch were there before John Snow?`,
        questionChoices: ['997', '993', '1003', '1013'],
        questionCorrectChoice: 0,
        correctDetails: `Jon Snow is the 998th Lord Commander of the Night's watch, meaning 997 came before him. His stint is short lived as he is murdered by a traitorous faction.`
    }
]

let currentQuestion = 0;
let totalQuestions = questionArray.length;
let totalCorrect = 0;

$(function () {
    $('.quiz-questions').hide();
    $('.correct-counter').hide();
});

$(document).on('click', '.start-button', function () {
    // hide start section and show question section
    $('.quiz-start').hide();
    $('.quiz-questions').show();
    $('.question-counter').show();
    $('.correct-counter').show();
    // add question text to question section
    $('#choice-list').html('');
    $('#question').text(questionArray[currentQuestion].questionText);
    $('.question-counter').append(currentQuestion);
    // test for loop
    // console.log(questionArray[9].questionChoices[0])
    for (let i = 0; i < questionArray[currentQuestion].questionChoices.length; i++) {
        let buildChoiceList = `<li><input class="option" type="radio" value=${i} name="option" required>${questionArray[currentQuestion].questionChoices[i]}</li>`;
        // console.log(buildChoiceList);
        $('#choice-list').append(buildChoiceList);
    }
});

$(document).on('click', '.next-question', function () {
    // let checkedValue = $('.option').filter(":checked").val();
    let checkedValue = $(this).parent().find("input[class='option']:checked").val();
    if ((checkedValue == undefined) || (checkedValue == 'undefined') || (checkedValue == null)) {
        alert('Please make a selection.');
    }

    else {
        // console.log(currentQuestion, 'this is current question');
        // console.log(checkedValue, 'my answer');
        // console.log(questionArray[currentQuestion].questionCorrectChoice, 'correct answer')
        // show question details
        $('.explain-answer').show();
        if (checkedValue == questionArray[(currentQuestion)].questionCorrectChoice) {
            $('.you-correct').show();
            $('.you-wrong').hide();
        }
        else {
            $('.you-correct').hide();
            $('.you-wrong').show();
        }
        $('.detail-explain').text(questionArray[(currentQuestion)].correctDetails);

        // if statement to add to correct question total
        if (checkedValue == questionArray[currentQuestion].questionCorrectChoice) {
            totalCorrect++;
            // show questionDetails by revealing div
        }
        // else show details if answered incorrectly
        // console.log(totalCorrect, 'this is total correct');
        currentQuestion++;

        if (currentQuestion == (questionArray.length)) {
            $('.main-section').hide();
            $('#final-score').text(`Total ${totalCorrect} out of ${totalQuestions}`)
            $('.quiz-results').show();
            $('.correct-counter').hide();
            // alert(`we've completed last question`);
            rankCharacter(totalCorrect);
        }
        else {
            // test user selection
            $('.paragraph-correct-counter').empty();
            $('.paragraph-correct-counter').append(totalCorrect);
            $('.question-counter').empty();
            $('.question-counter').append(currentQuestion);
            $('#question').empty();
            $('#question').text(questionArray[currentQuestion].questionText);
            $('#choice-list').empty();
            for (let i = 0; i < questionArray[currentQuestion].questionChoices.length; i++) {
                let buildChoiceList = `<li><input class="option" type="radio" value=${i} name="option" required>${questionArray[currentQuestion].questionChoices[i]}</li>`;
                // console.log(buildChoiceList);
                $('#choice-list').append(buildChoiceList);
            }
        }
    }
});


$(document).on('click', '.restart-quiz', function () {
    currentQuestion = 0;
    totalCorrect = 0;
    $('.paragraph-correct-counter').html('');
    $('.explain-answer').hide();
    $('.quiz-results').hide();
    $('.quiz-start').show();
});



function rankCharacter(totalCorrect) {
    if (totalCorrect < 2) {
        $('.which-character').text('You are Hodor!');
        $('.character-img').attr("src", 'https://vignette.wikia.nocookie.net/gameofthrones/images/1/18/Season_6_hodor_main.jpg/revision/latest?cb=20160617020835')
        $('.character-text').text(`You have your merits, however, knowledge is not one of them.`);
    }
    else {
        if (totalCorrect < 5) {
            $('.which-character').text('You are Kraznys mo Nakloz');
            $('.character-img').attr("src", 'https://vignette.wikia.nocookie.net/villains/images/d/d5/300px-Tumblr_my2ythQzuO1qis07wo1_500.jpg/revision/latest?cb=20151212115316')
            $('.character-text').text(`You have knowledge no doubt, but not enough to avoid messing with the Mother of Dragons.`);
        }
        else {
            if (totalCorrect < 7) {
                $('.which-character').text('You are  Ned Stark!');
                $('.character-img').attr("src", 'https://vignette.wikia.nocookie.net/gameofthrones/images/3/34/Eddard_Stark.jpg/revision/latest?cb=20190701140812')
                $('.character-text').text(`Strong and honorable, you definitely have some knowledge but there are some gaps that could leave you in a bad position.`);
            }
            else {
                if (totalCorrect < 9) {
                    $('.which-character').text('You are Littlefinger!');
                    $('.character-img').attr("src", 'https://vignette.wikia.nocookie.net/gameofthrones/images/9/9f/Profile-Littlefinger.png/revision/latest?cb=20170826005231')
                    $('.character-text').text(`You know a whole lot about Westeros! You are not exactly a good person but few would argue against your intellectual prowess.`);
                }
                else {
                    $('.which-character').text('You are Tyrion Lannister!');
                    $('.character-img').attr("src",'https://vignette.wikia.nocookie.net/gameofthrones/images/9/95/HandoftheKingTyrionLannister.PNG/revision/latest?cb=20190520175204');
                    $('.character-text').text(`You drink and you know things. Well, at the very least, you know things about Game of Thrones!`);
                }
            }
        }
    }
}

$('.character-img').attr("src",'https://vignette.wikia.nocookie.net/gameofthrones/images/9/95/HandoftheKingTyrionLannister.PNG/revision/latest?cb=20190520175204');


/* 
image sources
tyrion - https://vignette.wikia.nocookie.net/gameofthrones/images/9/95/HandoftheKingTyrionLannister.PNG/revision/latest?cb=20190520175204
littlefinger - https://vignette.wikia.nocookie.net/gameofthrones/images/9/9f/Profile-Littlefinger.png/revision/latest?cb=20170826005231
ned stark - https://vignette.wikia.nocookie.net/gameofthrones/images/3/34/Eddard_Stark.jpg/revision/latest?cb=20190701140812 
kraznys - https://vignette.wikia.nocookie.net/villains/images/d/d5/300px-Tumblr_my2ythQzuO1qis07wo1_500.jpg/revision/latest?cb=20151212115316 
hodor - https://vignette.wikia.nocookie.net/gameofthrones/images/1/18/Season_6_hodor_main.jpg/revision/latest?cb=20160617020835 
*/

// ask how to prevent going to next question if answer not selected
// ask about how best to style
// ask about merging the explain answer div into the main section div
// ask about making th