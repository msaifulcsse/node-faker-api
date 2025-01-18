# Node Faker API

Node Faker API is a simple Node.js project that provides endpoints to generate random data for various categories such as Persons, Locations, Ecommerce, Finance, Date, and Localization. This project uses the Faker.js library to generate realistic fake data for testing and development purposes.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine. You can download and install them from [Node.js](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/msaifulcsse/node-faker-api.git
   cd node-faker-api
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Server

Start the server by running the following command:
```bash
node index.js
```

The server will be running on `http://localhost:3000`.

## API Endpoints

### Get Random Profiles

- **Endpoint:** `/random-profiles`
- **Method:** `GET`
- **Description:** Returns a list of 10 random profiles.
- **Response:**
  ```json
  [
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "address": "123 Main St",
      "city": "Anytown",
      "country": "USA"
    },
    ...
  ]
  ```

### Get Random Locations

- **Endpoint:** `/random-locations`
- **Method:** `GET`
- **Description:** Returns a list of 10 random locations.
- **Response:**
  ```json
  [
    {
      "address": "123 Main St",
      "city": "Anytown",
      "country": "USA"
    },
    ...
  ]
  ```

### Get Random Ecommerce Data

- **Endpoint:** `/random-ecommerce`
- **Method:** `GET`
- **Description:** Returns a list of 10 random ecommerce data.
- **Response:**
  ```json
  [
    {
      "productName": "Awesome Widget",
      "price": "$19.99"
    },
    ...
  ]
  ```

### Get Random Finance Data

- **Endpoint:** `/random-finance`
- **Method:** `GET`
- **Description:** Returns a list of 10 random finance data.
- **Response:**
  ```json
  [
    {
      "accountNumber": "123456789",
      "transactionAmount": "$100.00"
    },
    ...
  ]
  ```

### Get Random Dates

- **Endpoint:** `/random-dates`
- **Method:** `GET`
- **Description:** Returns a list of 10 random dates.
- **Response:**
  ```json
  [
    {
      "date": "2025-01-18T22:39:00.000Z"
    },
    ...
  ]
  ```

### Get Random Localization Data

- **Endpoint:** `/random-localization`
- **Method:** `GET`
- **Description:** Returns a list of 10 random localization data.
- **Response:**
  ```json
  [
    {
      "locale": "en_US",
      "phoneNumber": "(555) 555-5555"
    },
    ...
  ]
  ```

## Author

- **GitHub:** [M SAIFUL ISLAM](https://github.com/msaifulcsse)
- **LinkedIn:** [M SAIFUL ISLAM](https://linkedin.com/in/msaifulcsse)
- **Email:** mailto:saifulbdjoy@gmail.com

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

Feel free to customize the `README.md` file as needed. This should give you a good starting point for your project documentation.