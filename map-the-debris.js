function orbitalPeriod(arr) {
  const GM = 398600.4418; // Gravitational parameter of Earth (km^3/s^2)
  const earthRadius = 6367.4447; // Radius of Earth (km)

  // Function to calculate orbital period
  function calculateOrbitalPeriod(avgAlt) {
    const semiMajorAxis = avgAlt + earthRadius; // Semi-major axis (km)
    const T = 2 * Math.PI * Math.sqrt(Math.pow(semiMajorAxis, 3) / GM); // Orbital period (seconds)
    return Math.round(T); // Round to the nearest whole number
  }

  // Transform average altitude into orbital periods
  const result = arr.map(body => {
    return {
      name: body.name,
      orbitalPeriod: calculateOrbitalPeriod(body.avgAlt)
    };
  });

  return result;
}


