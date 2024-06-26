import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function ProfileInfoCard({ title, details }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader
        color="transparent"
        shadow={false}
        floated={false}
        className="mx-0 mt-0 mb-1 flex items-center justify-between gap-4"
      >
        <Typography variant="h6" color="blue-gray">
          {title}
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        
        {details ? (
          <hr className="border-blue-gray-50 my-4" />
        ) : null}
        {details && (
          <ul className="flex flex-col gap-4 p-0">
            {Object.keys(details).map((el, key) => (
              <li key={key} className="flex items-center gap-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-semibold"
                >
                  {el}:
                </Typography>
                {typeof details[el] === "string" ? (
                  <Typography
                    variant="small"
                    className="font-normal text-blue-gray-500"
                  >
                    {details[el]}
                  </Typography>
                ) : (
                  details[el]
                )}
              </li>
            ))}
          </ul>
        )}
      </CardBody>
    </Card>
  );
}

export default ProfileInfoCard;