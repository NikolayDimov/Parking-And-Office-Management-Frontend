import { BASE_URL } from "./constants";

export const endpoints = {
  login: `${BASE_URL}/user/signin`,
  register: `${BASE_URL}/user/signup`,

  user: `${BASE_URL}/user`,
  getSingleUser: `${BASE_URL}/user/:userId`,
  deleteUser: `${BASE_URL}/user/:userId`,
  changePassword: `${BASE_URL}/user/change-password`,
  changeProfilePicture: `${BASE_URL}/user/change-picture`,

  getLocations: `${BASE_URL}/location`,
  getSingleLocation: `${BASE_URL}/location/:locationId`,
  createLocation: `${BASE_URL}/location`,
  updateLocation: `${BASE_URL}/location/:locationId`,
  deleteLocation: `${BASE_URL}/location/:locationId`,

  getFloorPlans: `${BASE_URL}/floor-plan`,
  getSingleFloorPlan: `${BASE_URL}/floor-plan/:floorPlanId`,
  getBySpotTypeAndLocation: `${BASE_URL}/floor-plan/search?`,
  createFloorPlan: `${BASE_URL}/floor-plan`,
  deleteFloorPlan: `${BASE_URL}/floor-plan/:floorPlanId`,

  getSpotTypes: `${BASE_URL}/spot-type`,
  getSingleSpotType: `${BASE_URL}/spot-type/:spotTypeId`,
  getSpotTypeByLocation: `${BASE_URL}/spot-type/search/:locationId`,
  createSpotType: `${BASE_URL}/spot-type`,

  getSpots: `${BASE_URL}/spot`,
  getSingleSpot: `${BASE_URL}/spot/:id`,
  createSpot: `${BASE_URL}/spot`,
  updateSpot: `${BASE_URL}/spot/:id`,
  deleteSpot: `${BASE_URL}/spot/:id`,
  checkSpot: `${BASE_URL}/spot/check`,
  getSpotsByFloorPlanId: `${BASE_URL}/spot/by-floorPlan`,
  getBySpotTypeAndFloorPlan: `${BASE_URL}/spot/by-type-and-floorplan/search`,
  getFreeBySpotTypeAndFloorPlan: `${BASE_URL}/spot/by-type-and-location-free/search`,
  getFreeSpotsCombinationBySpotTypeAndFloorPlan: `${BASE_URL}/spot/by-type-and-floor-plan-combination/search`,
  getSpotsOccupancyBySpotTypeAndLocation: `${BASE_URL}/spot/by-type-and-location-occupancy/search`,

  reservation: `${BASE_URL}/reservation`,
  getResevationsBySpotId: `${BASE_URL}/reservation/by-spot`,
  getPastReservationsByUser: `${BASE_URL}/reservation/by-user-past/`,
  getCurrentReservationsByUser: `${BASE_URL}/reservation/by-user-current/`,
  getFutureReservationsByUser: `${BASE_URL}/reservation/by-user-future/`,
  getFutureReservationsByUserAndLocation: `${BASE_URL}/reservation/by-user-and-location-future/`,

  getReservationsByUser: `${BASE_URL}/reservation/by-user/:userId`,
  getReservationsBySpot: `${BASE_URL}/reservation/by-spot/:spotId`,
  getSingleReservation: `${BASE_URL}/reservation/:reservationId`,
  createReservation: `${BASE_URL}/reservation`,
  createMultipleReservations: `${BASE_URL}/reservation/create-multiple`,
  updateReservation: `${BASE_URL}/reservation/:reservationId`,
  deleteReservation: `${BASE_URL}/reservation/:reservationId`,
  checkReservation: `${BASE_URL}/reservation/check`,
};
