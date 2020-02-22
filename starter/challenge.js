console.log('Hello, world!');

class Infrastructure {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    };

    calcAge() {
        this.age = new Date().getFullYear() - this.buildYear
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

const greenPark = new Park('Green Park', 1970, 4500, 1.5);
greenPark.calcAge();

const nationalPark = new Park('National Park', 1892, 140, 0.5);
nationalPark.calcAge();

const oakPark = new Park('Oak Park', 1999, 900, 1);
oakPark.calcAge();

function averageAge(...parks) {
    let sum;
    parks.forEach(cur => {
        sum = 0;
        sum += cur.age;
    })
    return (sum/parks.length).toFixed(2);
};

function manyTrees(...parks) {
    parks.forEach(cur => {
        cur.treeDensity();
        if (cur.mostTrees) {
            return cur.name
        }
    });
}

class Street extends Infrastructure {
    constructor(name, buildYear, length, size = 'normal') {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
}

const oceanAvenue = new Street('Ocean Avenue', 2001, 3, 'big');
oceanAvenue.calcAge();

const evergreenStreet = new Street('Evergreen Street', 1948, 1.5, 'small');
evergreenStreet.calcAge();

const fourthStreet = new Street('4th Street', 1991, 2);
fourthStreet.calcAge();

const sunsetBlvd = new Street('Sunset Boulevard', 2010, 5, 'huge');
sunsetBlvd.calcAge();


function streetMeasurements(...streets) {
    let total, avg;
    streets.forEach(cur => {
        total = 0;
        total += cur.length
    })
    avg = total/streets.length;
    console.log(total, avg);
    return total, avg;
}

streetMeasurements(oceanAvenue, evergreenStreet, fourthStreet, sunsetBlvd);

const parksReport = new Map();
parksReport.set(1, `Our 3 parks have an average age of ${averageAge(greenPark, nationalPark, oakPark)} years.`);
parksReport.set(2, `${greenPark.name} has a tree density of ${greenPark.treeDensity()} trees per square km.`);
parksReport.set(3, `${nationalPark.name} has a tree density of ${nationalPark.treeDensity()} trees per square km.`);
parksReport.set(4, `${oakPark.name} has a tree density of ${oakPark.treeDensity()} trees per square km.`);
parksReport.set(5, `${manyTrees(greenPark, nationalPark, oakPark)} has more than 1000 trees.`);
console.log(parksReport.get(5))


// console.log(averageAge(greenPark, nationalPark, oakPark)); // use in reports

// use default parameters for streets

// Use Maps for the report