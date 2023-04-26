//import logo from './logo.svg';
import './App.css';
import { Card } from './Card/card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="firstrow">
        <Card
          id="1"
          img="https://m.media-amazon.com/images/I/71lMEeDJhuL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg"
          imgalt="./71lMEeDJhuL._AC_CR0,0,0,0_SX615_SY462_.jpg"
          name="HONOR MagicBook X14 (2023)"
          brand="HONOR"
          description="12th Gen Intel Core i5-12450H (8GB/512GB NVMe SSD, 14-inch (35.56 cm) FHD IPS Anti-Glare Thin and Light Laptop/Windows 11/Backlit Keyboard/Fingerprint Login/1.43Kg), Gray"
          price="48,990"
          />
          <Card
          id="2"
          img="https://m.media-amazon.com/images/I/91zVSkGGZbS._SX679_.jpg"
          imgalt="./91zVSkGGZbS._SX679_.jpg"
          name="ASUS TUF Gaming A15"
          brand="ASUS"
          description="15.6-inch (39.62 cms) FHD 144Hz, AMD Ryzen 5 4600H, 4GB NVIDIA GeForce GTX 1650, Gaming Laptop (8GB/512GB SSD/Windows 11/Black/2.3 Kg), FA506IHRZ-HN111W"
          price="49,990"
          />
          <Card
          id="3"
          img="https://m.media-amazon.com/images/I/81wJJj6jLfL._SX679_.jpg"
          imgalt="./81wJJj6jLfL._SX679_.jpg"
          name="HP Victus Gaming "
          brand="HP"
          description="Latest AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD Gaming Laptop (8GB RAM/512GB SSD/4GB Radeon RX5500M Graphics/B&O/Backlit KB/Win 11)"
          price="55,990"
          />
          </div>
          <br/>
          <br/>
          <div className="secondrow">
          <Card
          id="4"
          img="https://m.media-amazon.com/images/I/81c+XOq0b+L._SX522_.jpg"
          imgalt="./81c+XOq0b+L._SX522_.jpg"
          name="MSI Katana GF66"
          brand="MSI"
          description="Intel 12th Gen. i5-12450H, 40CM FHD 144Hz Gaming Laptop (8GB/512GB NVMe SSD/Windows 11 Home/Nvidia RTX3050 4GB GDDR6/Black/2.25Kg), 12UC-636IN"
          price="68,990"
          />
          <Card
          id="5"
          img="https://m.media-amazon.com/images/I/61W8CP-eZSL._SX679_.jpg"
          imgalt="./61W8CP-eZSL._SX679_.jpg"
          name="Dell G15-5520 Gaming Laptop"
          brand="Dell"
          description="Intel i9-12900H, 16GB DDR5, 1TB SSD, NVIDIA RTX 3060 (6GB GDDR6), 15.6 inch (39.62Cms) FHD WVA AG, Windows 11+ MSO'21, 15 Month McAfee, Dark Shadow Grey, 2.81Kgs"
          price="1,38,490"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
