import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { img1, img2, img3 } from "../assets";

class Cards extends Component {
  render() {
    return (
      <div
        className="flex flex-col items-center bg-gradient-to-r from-black via-gray-800 to-black min-h-screen px-4 py-10"
        section
        id="Features"
      >
        <div className="mb-10 text-center px-4">
          <span
            className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-50 inline-block text-transparent bg-clip-text"
            style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}
          >
            Upcoming Features & Events
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-10 w-full max-w-7xl">
          {/* Card 1 */}
          <Card className="w-full sm:w-[300px] md:w-[350px] lg:w-96 bg-gradient-to-r from-black via-gray-800 to-black border border-yellow-800 mt-10">
            <CardHeader color="black" className="relative h-56">
              <img
                src={img1}
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h5"
                color="white"
                className="mb-2 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 inline-block text-transparent bg-clip-text"
              >
                UI/UX Review Check
              </Typography>
              <Typography className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 inline-block text-transparent bg-clip-text">
                The place is close to Barceloneta Beach and the main nightlife
                in Barcelona and bus stop just 2 min by walk and near to
                "Naviglio" where you can enjoy the main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button className="bg-yellow-700 text-black">Read More</Button>
            </CardFooter>
          </Card>

          {/* Card 2 */}
          <Card className="w-full sm:w-[300px] md:w-[350px] lg:w-96 bg-gradient-to-r from-black via-gray-800 to-black border border-yellow-800 mt-20">
            <CardHeader color="black" className="relative h-56">
              <img
                src={img2}
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h5"
                color="white"
                className="mb-2 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 inline-block text-transparent bg-clip-text"
              >
                Product Launch
              </Typography>
              <Typography className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 inline-block text-transparent bg-clip-text">
                New features rolling out soon. Stay tuned for a new era of UI
                performance and smooth navigation.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button className="bg-yellow-700 text-black">Read More</Button>
            </CardFooter>
          </Card>

          {/* Card 3 */}
          <Card className="w-full sm:w-[300px] md:w-[350px] lg:w-96 bg-gradient-to-r from-black via-gray-800 to-black border border-yellow-800 mt-10">
            <CardHeader color="black" className="relative h-56">
              <img
                src={img3}
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h5"
                color="white"
                className="mb-2 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 inline-block text-transparent bg-clip-text"
              >
                Community Growth
              </Typography>
              <Typography className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 inline-block text-transparent bg-clip-text">
                Join thousands of creators and developers pushing the boundaries
                of digital design. New features rolling out soon. Stay tuned for
                a new era of UI performance and smooth navigation.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button className="bg-yellow-700 text-black">Read More</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }
}

export default Cards;
