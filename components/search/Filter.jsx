const Filter = () => {
  return (
    <>
      <div className="col-span-3 space-y-4">
        <div>
          <h3 className="font-bold text-lg">Sort By</h3>
          <form action="" className="flex flex-col gap-2 mt-2">
            <label for="highToLow">
              <input
                type="checkbox"
                name="highToLow"
                id="highToLow"
                className="mr-1"
              />
              Price High to Low
            </label>

            <label for="lowToHigh">
              <input
                type="checkbox"
                name="lowToHigh"
                id="lowToHigh"
                className="mr-1"
              />
              Price Low to high
            </label>
          </form>
        </div>

        <div>
          <h3 className="font-bold text-lg">Price Range</h3>
          <form action="" className="flex flex-col gap-2 mt-2">
            <label for="range1">
              <input
                type="checkbox"
                name="range1"
                id="range1"
                className="mr-1"
              />
              $ 13 - $ 30
            </label>

            <label for="range2">
              <input
                type="checkbox"
                name="range2"
                id="range2"
                className="mr-1"
              />
              $ 30 - $ 60
            </label>

            <label for="range3">
              <input
                type="checkbox"
                name="range3"
                id="range3"
                className="mr-1"
              />
              $ 60 - $ 97
            </label>

            <label for="range3">
              <input
                type="checkbox"
                name="range3"
                id="range3"
                className="mr-1"
              />
              $ 97 - $ 152
            </label>

            <label for="range4">
              <input
                type="checkbox"
                name="range4"
                id="range4"
                className="mr-1"
              />
              $ 152 - $ 182
            </label>

            <label for="range5">
              <input type="checkbox" name="range5" id="range5" />$ 182+
            </label>
          </form>
        </div>

        <div>
          <h3 className="font-bold text-lg">Star Category</h3>
          <form action="" className="flex flex-col gap-2 mt-2">
            <label for="fiveStar">
              <input
                type="checkbox"
                name="fiveStar"
                id="fiveStar"
                className="mr-1"
              />
              5 Star
            </label>

            <label for="fourStar">
              <input
                type="checkbox"
                name="fourStar"
                id="fourStar"
                className="mr-1"
              />
              4 Star
            </label>

            <label for="threeStar">
              <input
                type="checkbox"
                name="threeStar"
                id="threeStar"
                className="mr-1"
              />
              3 Star
            </label>

            <label for="twoStar">
              <input
                type="checkbox"
                name="twoStar"
                id="twoStar"
                className="mr-1"
              />
              2 Star
            </label>

            <label for="oneStar">
              <input
                type="checkbox"
                name="oneStar"
                id="oneStar"
                className="mr-1"
              />
              1 Star
            </label>
          </form>
        </div>

        <div>
          <h3 className="font-bold text-lg">Amenities</h3>
          <form action="" className="flex flex-col gap-2 mt-2">
            <label for="wifi">
              <input type="checkbox" name="wifi" id="wifi" className="mr-1" />
              Wi-fi
            </label>

            <label for="swimmingPool">
              <input
                type="checkbox"
                name="swimmingPool"
                id="swimmingPool"
                className="mr-1"
              />
              Swimming Pool
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default Filter;
