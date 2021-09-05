const bd = document.querySelector("body");
const allData = [
  {
    votes: 1,
    answers: 1,
    views: 1,
    question: "This is Question Number 1",
    tag1: "tag1",
    tag2: "tag2",
    tag3: "tag3",
    person: "abc",
  },
  {
    votes: 2,
    answers: 2,
    views: 2,
    question: "This is Question Number 2",
    tag1: "tag1",
    tag2: "tag2",
    tag3: "tag3",
    person: "def",
  },
  {
    votes: 3,
    answers: 3,
    views: 3,
    question: "This is Question Number 3",
    tag1: "tag1",
    tag2: "tag2",
    tag3: "tag3",
    person: "ghi",
  },
  {
    votes: 4,
    answers: 4,
    views: 4,
    question: "This is Question Number 4",
    tag1: "tag1",
    tag2: "tag2",
    tag3: "tag3",
    person: "awfegrtbc",
  },
  {
    votes: 5,
    answers: 5,
    views: 5,
    question: "This is Question Number 5",
    tag1: "tag1",
    tag2: "tag2",
    tag3: "tag3",
    person: "abcsdfgn",
  },
  {
    votes: 6,
    answers: 6,
    views: 6,
    question: "This is Question Number 6",
    tag1: "tag1",
    tag2: "tag2",
    tag3: "tag3",
    person: "xyz",
  },
];

allData.map((data) => {
  const newQuestionSummary = document.createElement("div");
  newQuestionSummary.className = "question-summary";

  const newCP = document.createElement("div");
  newCP.className = "cp";

  const newVotesInfo = document.createElement("div");
  newVotesInfo.className = "info";

  const newVotesCount = document.createElement("div");
  newVotesCount.className = "mini-counts";
  newVotesCount.textContent = data.votes;

  const newVotes = document.createElement("div");
  newVotes.textContent = "votes";

  newVotesInfo.appendChild(newVotesCount);
  newVotesInfo.appendChild(newVotes);

  const newAnswersInfo = document.createElement("div");
  newAnswersInfo.className = "info";

  const newAnswersCount = document.createElement("div");
  newAnswersCount.className = "mini-counts";
  newAnswersCount.textContent = data.answers;

  const newAnswer = document.createElement("div");
  newAnswer.textContent = "answers";

  newAnswersInfo.appendChild(newAnswersCount);
  newAnswersInfo.appendChild(newAnswer);

  const newViewsInfo = document.createElement("div");
  newViewsInfo.className = "info";

  const newViewsCount = document.createElement("div");
  newViewsCount.className = "mini-counts";
  newViewsCount.textContent = data.views;

  const newViews = document.createElement("div");
  newViews.textContent = "views";

  newViewsInfo.appendChild(newViewsCount);
  newViewsInfo.appendChild(newViews);

  newCP.appendChild(newVotesInfo);
  newCP.appendChild(newAnswersInfo);
  newCP.appendChild(newViewsInfo);

  const newSummary = document.createElement("div");
  newSummary.className = "summary";

  const newQuestion = document.createElement("p");
  const newQuestionName = document.createElement("a");
  newQuestionName.href = `#${data.question}`;
  newQuestionName.textContent = data.question;
  newQuestion.appendChild(newQuestionName);

  const newTags = document.createElement("div");
  newTags.className = "tags";

  const newtag1 = document.createElement("div");
  newtag1.className = "box-content";
  newtag1.textContent = data.tag1;

  const newtag2 = document.createElement("div");
  newtag2.className = "box-content";
  newtag2.textContent = data.tag2;

  const newtag3 = document.createElement("div");
  newtag3.className = "box-content";
  newtag3.textContent = data.tag3;

  const newPersonInfo = document.createElement("div");
  newPersonInfo.className = "person";
  const personInfo = document.createElement("div");
  personInfo.textContent = `asked by ${data.person}`;

  newPersonInfo.appendChild(personInfo);

  newTags.appendChild(newtag1);
  newTags.appendChild(newtag2);
  newTags.appendChild(newtag3);
  newSummary.appendChild(newQuestion);
  newSummary.appendChild(newTags);
  newSummary.appendChild(newPersonInfo);

  newQuestionSummary.appendChild(newCP);
  newQuestionSummary.appendChild(newSummary);
  bd.appendChild(newQuestionSummary);
});
