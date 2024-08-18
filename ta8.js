function findTheOldest(people) {
    const oldest = people.reduce((oldestPerson, currentPerson) => {
        const currentAge = (currentPerson.yearOfDeath - currentPerson.yearOfBirth);
        const oldestAge = (oldestPerson.yearOfDeath - oldestPerson.yearOfBirth);
        return currentAge > oldestAge ? currentPerson : oldestPerson;
    });

    console.log(oldest.name);
}