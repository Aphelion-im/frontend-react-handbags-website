import React from 'react';
import Button from './components/Button/Button';
import Product from './components/Product/Product';
import Tile from './components/Tile/Tile';
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import ourstory from './assets/our_story.png';
import './App.css';

export default function App() {
  return (
    <>
      <h1>Handbags & Purses</h1>
      {/* Nav buttons */}
      <nav>
        <Button buttonText="to the collection" />
        <Button buttonText="shop alle bags" />
        <Button buttonText="pre-orders" disabled />
      </nav>
      {/* Producten */}
      <main>
        <Product
          labelText="Best seller"
          price="400"
          name="The handy bag"
          image={bag1}
          title="Bag 1"
        />
        <Product
          labelText="Best seller"
          price="250"
          name="The stylish bag"
          image={bag2}
          title="Bag 2"
        />
        <Product
          labelText="Best seller"
          price="300"
          name="The simple bag"
          image={bag3}
          title="Bag 3"
        />
        <Product
          labelText="Best seller"
          price="150"
          name="The trendy bag"
          image={bag4}
          title="Bag 4"
        />
      </main>

      <footer>
        <Tile brand="brand" header="The brand">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi
            minus praesentium quia optio? Laborum!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
            pariatur esse deleniti aperiam libero, commodi reiciendis cum
            numquam rem natus?
          </p>
        </Tile>
        <Tile image={brand} title="Brand" />
        <Tile image={ourstory} title="Our story" />
        <Tile header="Our story">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            ab sunt, deserunt nihil dignissimos, consectetur iusto reprehenderit
            facilis quo porro explicabo eveniet ipsum accusamus repudiandae sint
            quaerat tenetur officia ut!
          </p>
        </Tile>
      </footer>
    </>
  );
}
