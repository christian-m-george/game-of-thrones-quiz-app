let questionArray = [
    //question 1
    {
        questionText: '1 What are the official words of House Lannister?',
        questionChoices: ['A Lannister always pays his debts', 'As High as Honor', '**Hear me roar!', 'Fire and Blood'],
        questionCorrectChoice: 2,
        correctDetails: `"Hear me roar!" are the official words of House Lannister, used much less frequently than their unofficial motto, "A Lannister always pays his debts'`
    },
    //question 2
    {
        questionText: '2 How high is the Wall?',
        questionChoices: ['2000 feet', '1200 feet', '**700 feet', '500 feet'],
        questionCorrectChoice: 2,
        correctDetails: 'The wall is 700 feet tall, and it was built roughly 8000 years prior to the setting, by Bran the Builder of the Stark family'
    },
    //question 3
    {
        questionText: `3 Who saves Samwell Tarly, Gilly, and her baby after fleeing Craster's keep>`,
        questionChoices: ['**Coldhands', 'Bran warged into Summer', 'Lady Stonehart', 'Three Eyed Raven'],
        questionCorrectChoice: 0,
        correctDetails: 'Coldhands, popularly believed to be Benjen Stark, but whose identity is still unknown, saves the group and helps them make it to Bran.'
    },
    //question 4
    {
        questionText: '4 In which city does Danaerys obtain the Unsullied army?',
        questionChoices: ['Mereen', '**Astapor', 'Yunkai', 'Qarth'],
        questionCorrectChoice: 1,
        correctDetails: 'Danaerys obtains this army in Astapor after trading a dragon for it, only to turn the dragon against the slave masters.'
    },
    //question 5
    {
        questionText: '5 What term of endearment does Cersei use for Sansa upon her arrival in the capital?',
        questionChoices: ['Little bird', '**Little dove', 'Little one', 'Little sparrow'],
        questionCorrectChoice: 1,
        correctDetails: `Sansa catches on that Cersei's words, 'little dove' are merely for show and that she is a true enemy of her family.`
    },
    //question 6
    {
        questionText: '6 During which battle was Rhaegar Targaryen struck down?',
        questionChoices: ['Battle of the Seven Stars', 'Battle of Blackwater', '**Battle of the Trident', 'Battle of Ashford'],
        questionCorrectChoice: 2,
        correctDetails: `Robert Baratheon caved in Rhaegar's breastplate at the Battle of the Trident, a war begun by the "capture" of Lyanna Stark.`
    },
    //question 7
    {
        questionText: '7 Which Greyjoy has returned from a saling expedition with a dragon horn?',
        questionChoices: ['Aeron Greyhoy', 'Euron Greyjoy', 'Balon Greyjoy', '**Victarion Greyjoy'],
        questionCorrectChoice: 3,
        correctDetails: `The "Dragonbinder" is a mysetrious artifact retrieved by Victarion from the smoking ruins of Valyria.`
    },
    //question 8
    {
        questionText: `8 Jaqen H'ghar offers Arya three lives in exchange for the ones she saved. Who doesn't Arya request he kill?`,
        questionChoices: ['Ser Amory Lorch', '**Tywin Lannister', `Jaqen H'ghar`, 'The Tickler'],
        questionCorrectChoice: 1,
        correctDetails: 'Frustrated that Tywin departed Harrenhall before she could kill him, Arya asks Jaqen for help in escaping, but he refuses as its outsides the bounds of his offer. She counters by naming him as a target.'
    },
    //question 9
    {
        questionText: '9 What alias does Tyrion assume on his journey to Volantis?',
        questionChoices: ['Oppo', 'Griff', 'Penny', '**Yollo'],
        questionCorrectChoice: 3,
        correctDetails: `Tyrion travels under the alias "Yollo" as he is wanted for the murder of father, and Cersei has put a hefty price on his head. He is eventually captured.`
    },
    //question 10
    {
        questionText: `10 How many Lord Commanders of the Night's Watch were there before John Snow?`,
        questionChoices: ['**997', '993', '1003', '1013'],
        questionCorrectChoice: 0,
        correctDetails: `Jon Snow is the 998th Lord Commander of the Night's watch, meaming 997 came before him. His stint is short lived as he is murdered by a traitorous faction.`
    }
]

let currentQuestion = 0;
let totalQuestions = questionArray.length;
let totalCorrect = 0;

//   console.log(totalQuestions);
//   console.log(questionArray[0]);

$('.start-button').on('click', function () {
    // hide start section and show question section
    $('.quiz-start').addClass('hidden-section');
    $('.quiz-questions').removeClass('hidden-section');
    $('.question-counter').removeClass('hidden-section');
    $('.correct-counter').removeClass('hidden-section');
    // add question text to question section
    $('#question').text(questionArray[currentQuestion].questionText);
    $('.question-counter').append(currentQuestion);
    // test for loop
    // console.log(questionArray[9].questionChoices[0])
    for (let i = 0; i < questionArray[currentQuestion].questionChoices.length; i++) {
        let buildChoiceList = `<li><input class="option" type="radio" value=${i} name="option">${questionArray[currentQuestion].questionChoices[i]}</li>`;
        console.log(buildChoiceList);
        $('#choice-list').append(buildChoiceList);
    }
});

$('.next-question').on('click', function () {
    // let checkedValue = $('.option').filter(":checked").val();
    let checkedValue = $(this).parent().find("input[class='option']:checked").val();
    console.log(currentQuestion, 'this is current question');
    console.log(checkedValue, 'my answer');
    console.log(questionArray[currentQuestion].questionCorrectChoice, 'correct answer')
    // if statement to add to correct question total
    if (checkedValue == questionArray[currentQuestion].questionCorrectChoice) {
        totalCorrect++;
        // show questionDetails by revealing div
    }
    // else show details if answered incorrectly
    console.log(totalCorrect, 'this is total correct');
    currentQuestion++;
    if (currentQuestion == (questionArray.length)) {
        $('.main-section').hide();
        $('.quiz-results p').text(`Total ${totalCorrect} out of ${totalQuestions}`)
        $('.quiz-results').show();
        alert(`we've reached last question`);
    }
    else {
        // test user selection
        
        $('.correct-counter').empty();
        $('.correct-counter').append(totalCorrect);
        // currentQuestion++;
        $('.question-counter').empty();
        $('.question-counter').append(currentQuestion);
        $('#question').empty();
        $('#question').text(questionArray[currentQuestion].questionText);
        $('#choice-list').empty();
        for (let i = 0; i < questionArray[currentQuestion].questionChoices.length; i++) {
            let buildChoiceList = `<li><input class="option" type="radio" value=${i} name="option">${questionArray[currentQuestion].questionChoices[i]}</li>`;
            console.log(buildChoiceList);
            $('#choice-list').append(buildChoiceList);
        }
    }
});
