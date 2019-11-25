import React from 'react';
import './App.scss';

const facts = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Maecenas vulputate sapien non felis sollicitudin, in aliquet quam ornare',
  'Aliquam et tortor lacinia massa ultricies malesuada',
  'Nam egestas risus in sem ultrices, ac mattis augue semper',
  'Pellentesque eu ex sit amet velit congue aliquam eu vel tortor',
  'Pellentesque id elit eu ligula interdum iaculis',
  'Aenean id augue nec dolor tempus convallis id at ante',
  'Integer ac turpis varius, cursus orci sed, sodales justo',
  'Integer pellentesque odio vel elit interdum sodales',
  'Cras at arcu rutrum purus ultrices fringilla vel id metus',
  'Fusce sed mauris eget lorem vulputate dignissim',
  'Ut non felis sed diam luctus volutpat',
  'Integer luctus urna eget nulla commodo lacinia',
  'Nulla molestie neque vitae semper volutpat',
  'Praesent cursus est non vulputate malesuada',
  'Nunc sed augue fringilla, semper ligula ac, aliquet magna',
  'Proin nec dui eu ligula luctus hendrerit eget eget lorem',
  'Quisque vitae purus tempus, gravida ante id, viverra nisl',
  'Nam vitae sapien ac orci rhoncus accumsan at nec ex',
  'Pellentesque eu libero aliquet, ultricies tortor nec, tincidunt leo',
  'Nunc posuere felis a nisi vehicula condimentum',
  'Etiam vel augue a lacus sodales tincidunt',
  'Integer finibus massa sit amet orci viverra accumsan',
  'Quisque mattis turpis consequat metus tempor, at consequat velit consequat',
  'Praesent accumsan neque ac risus consectetur condimentum'
];

const order = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24
];

function ramdomSort(a, b) {
  return 0.5 - Math.random();
}

function App() {
  const orders = [];

  for (let i = 0; i < 10; i++) {
    let ramdomedOrder;
    do {
      ramdomedOrder = [...order.sort(ramdomSort)];
    } while (orders.indexOf(ramdomedOrder) !== -1);
    orders.push(ramdomedOrder);
  }

  return (
    <div>
      <div className="setting">setting</div>
      <div className="container">
        {orders.map((order, key) => (
          <div key={key}>
            <h2>TW Bingo :: {key + 1}</h2>
            <div className="bingo">
              {order.map(key => (
                <div key={key} className="fact">
                  <div className="text">{facts[key]}</div>
                  <div className="sign-here">
                    <div className="x">&times;</div>
                    <div className="watermark">sign here</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
