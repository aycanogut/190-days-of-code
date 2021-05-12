const listContainer = document.querySelector('.container');

const createElement = () => {
  const section = document.createElement('section');
  const h4 = document.createElement('h4');
  const ul = document.createElement('ul');
  const li = document.createElement('li');

  // styles
  const sectionClassList = ['d-flex', 'justify-content-center', 'flex-column', 'my-4', 'lists', 'bg-dark', 'py-5'];
  const h4ClassList = ['d-flex', 'justify-content-center', 'py-4', 'text-warning']
  const ulClassList = ['nes-list', 'is-disc'];

  //  define that styles to the elements
  section.classList.add(...sectionClassList);
  h4.classList.add(...h4ClassList);
  ul.classList.add(...ulClassList);

  // append elements to dom
  listContainer.appendChild(section);
  section.appendChild(h4);
  section.appendChild(ul);

  // li elements
  let list = [{
    value: 'a',
  }, {
    value: 'b',
  }, {
    value: 'c'
  }, {
    value: 'd'
  }]
  let day = "x";

  // h4 
  h4.innerHTML = `day-${day}`


  // map fonksiyonu ile li elemanlarini ul ye appen ediyoruz

  list.map(({
    value
  }) => {
    return ul.innerHTML += `<li class="py-3">${value}</li>`
  });

}


createElement()

// javascript destructuring