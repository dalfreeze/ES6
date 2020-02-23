console.log('Hello, world!');

class Infrastructure {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    };

    calcAge() {
        this.age = new Date().getFullYear() - this.buildYear;
    };
}

class Park extends Infrastructure {
    constructor(name, buildYear, trees, area) {
        super(name, buildYear)
        this.trees = trees;
        this.area = area;
    };

    treeDensity() {
        this.treeDensity = this.trees/this.area;
        this.treeDensity > 1000 ? this.mostTrees = true : this.mostTrees = false;
        return this.treeDensity;
    };
};

const parksArr = [
    new Park('Green Park', 1970, 4500, 1.5),
    new Park('National Park', 1892, 140, 0.5),
    new Park('Oak Park', 1999, 900, 1)
];
averageAge(parksArr);

function averageAge(arr) {
    let sum;
    arr.forEach(cur => {
        cur.calcAge()
        console.log(cur.age)
        }
    );
    arr.forEach(cur => {
        sum = 0;
        sum += cur.age;
        console.log(sum)
        }
    );
    console.log(sum)
    return (sum/arr.length).toFixed(2);
};

class Street extends Infrastructure {
    constructor(name, buildYear, length, size = 'normal') {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
}

const oceanAvenue = new Street('Ocean Avenue', 2001, 3, 'big');

const evergreenStreet = new Street('Evergreen Street', 1948, 1.5, 'small');

const fourthStreet = new Street('4th Street', 1991, 2);

const sunsetBlvd = new Street('Sunset Boulevard', 2010, 5, 'huge');


function streetMeasurements(...streets) {
    let total, avg;
    streets.forEach(cur => {
        total = 0;
        total += cur.length
    })
    avg = total/streets.length;
    return total, avg;
}

streetMeasurements(oceanAvenue, evergreenStreet, fourthStreet, sunsetBlvd);


// console.log(averageAge(greenPark, nationalPark, oakPark)); // use in reports

// use default parameters for streets

// Use Maps for the report