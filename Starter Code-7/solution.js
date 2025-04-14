document.querySelector('#task1').innerText = 'Changed using \'innerText\'.';        //Task 1
document.querySelector('#task2').innerHTML = '<button>Submit</button';              //Task 2
document.querySelector('body').style.backgroundColor = '#232323';                   //Task 3
document.querySelector('body').style.color = '#fff';                                //Task 3 (so I can see :-P)
const lis = document.querySelectorAll('li');                                        //Task 4
for (let li of lis) {
    li.style.border = '2px solid red';
}
document.querySelector('#task5').href = 'https://www.springboard.com/';             //Task 5
document.querySelector('#task6').value = 'DOM Master';                              //Task 6
document.querySelector('#task7').classList.add('new-class');                        //Task 7
const newButton = document.createElement('button');                                 //Task 8
newButton.innerText = 'New Button';
document.querySelector('#task8').append(newButton);
document.querySelector('#task9').remove();                                          //Task 9