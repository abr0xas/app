import main from './main.module.css';

export function Main() {
  return (
    <main className="">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className={main.Rectangle}>
              <img
                src="img/ferran-fusalba-99194.png"
                srcSet="img/ferran-fusalba-99194@2x.png 2x,
                            img/ferran-fusalba-99194@3x.png 3x"
                className="ferran-fusalba-99194"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
