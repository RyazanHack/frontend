import {
	Card,
	CardBody,
	Typography,
	Tabs,
	TabsHeader,
	Tab,
  } from "@material-tailwind/react";
import {
  HomeIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import ProfileInfoCard from '../components/UI/Profile/Profile'

const ProfilePage = () => {
	return (
		<>
		<Card className="mx-3 mt-10 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  Трепалин Александр
                </Typography>
              </div>
            </div>
            <div className="w-96">
              <Tabs value="app">
                <TabsHeader>
                  <Tab value="app">
                    <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Профиль
                  </Tab>
                  <Tab value="settings">
                    <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Настройки
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <ProfileInfoCard
              title="Информация о пользователе"
              details={{
                "Имя": "Трепалин",
                "Фамилия": "Александр",
                "Дата рождения": "16 июнь 2005",
                "Пол": "мужской",
                "Номер телефона": "+7 800 555 35 35",
                "Регион": "Рязанская область"
              }}
            />
          </div>
        </CardBody>
      </Card>
		</>
	)
}

export default ProfilePage
