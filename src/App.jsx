import { useState } from "react";
import { slides } from "./data";
import rightArrow from "./assets/icon-next.svg";
import leftArrow from "./assets/icon-prev.svg";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <main className="main-section">
      <div className="section">
        <div className="container">
          <div className="slider">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={
                  index === currentSlide ? "slide-style slide active" : "slide"
                }
              >
                <div className="slide-style">
                  <div className="left-section">
                    <p className="left-section-text">"{slide.text}"</p>
                    <div className="left-section-info">
                      <h2 className="left-section-info-name">{slide.name}</h2>
                      <p className="left-section-info-role">{slide.role}</p>
                    </div>
                  </div>
                  <div className="right-section">
                    <img src={slide.image} alt={slide.name} />
                    <div className="arrows">
                      <div className="prev" onClick={prevSlide}>
                        <img src={leftArrow} alt="prev" />
                      </div>
                      <div className="next" onClick={nextSlide}>
                        <img src={rightArrow} alt="next" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
