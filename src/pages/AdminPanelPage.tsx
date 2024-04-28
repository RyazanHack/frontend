import React, { useCallback, useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Progress,
  Button
} from "@material-tailwind/react";

import {
	BanknotesIcon,
	ClockIcon,
	UsersIcon,
  } from "@heroicons/react/24/solid";
import StatisticsCard from "../components/UI/StatisticsCard/StatisticsCard";
import StagesService from "../API/StagesService";
import { useNavigate } from "react-router-dom";
import RoutePaths from "../router/Routes";
import AdminService, { RegionStat } from "../API/AdminService";
import { getCrest } from "../utils/getRegions";
import axios from "axios";
import { MAIN_API } from "../config";

interface Stats {
  users: number,
  purchased: number
}

const AdminPanelPage = () => {
  const navigate = useNavigate();

  const [stage, setStage] = useState<1 | 2 | 3>(1);

  const getStage = useCallback(async () => {
    const stage = await StagesService.get_stage();
    setStage(stage);
  }, [])

  useEffect(() => {
    getStage()
  }, [])

  const [stats, setStats] = useState<Stats>()
  
  const [projectsTableData, setRegionsData] = useState<(RegionStat & {
    img: string
  })[]>([]);

  const getData = useCallback(async () => {
    const stats = await AdminService.getStats();

    setStats(stats)
    
    const regions = await AdminService.getRegions(stage);

    setRegionsData(regions.map(region => {
      return {
        ...region,
        img: getCrest(region.name)
      }
    }))
  }, [])

  const statisticsCardsData = [
    {
      color: "gray",
      icon: BanknotesIcon,
      title: "Купленные голоса",
      value: stats?.purchased,
    },
    {
      color: "gray",
      icon: UsersIcon,
      title: "Зарегестрированные пользователи",
      value: stats?.users,
    }
  ];

  useEffect(() => {
    getData()
  }, [])

	return (
		<div className="mt-3 m-5">
      <div className="grid grid-cols-3 gap-6 max-w-[75em]">
        <Button 
          className='mt-6'
          onClick={() => {
            AdminService.nextStage(stage)
          }}
        >
					Завершить голосование
				</Button>
        {stage === 2 &&
        <Button 
          className='mt-6'
          onClick={() => navigate(RoutePaths.ADD_TRACK)}
        >
					Добавить трек
				</Button>
        }
        <Button 
          className='mt-6'
          onClick={() => {
            axios({
                url: MAIN_API + '/statistic/xlsx',
                method: 'GET',
                responseType: 'blob', 
            }).then((response) => {
                const href = URL.createObjectURL(response.data);
            
                const link = document.createElement('a');
                link.href = href;
                link.setAttribute('download', 'отчёт.xlsx');
                document.body.appendChild(link);
                link.click();
            
                document.body.removeChild(link);
                URL.revokeObjectURL(href);
            });
          }}
        >
					Выгрузить отчёт
				</Button>
      </div>
      <div className="grid gap-y-10 mt-3 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsCardsData.map(({ icon, title, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
          />
        ))}
      </div>
      <div className="mb-4 grid grid-cols-1 gap-6">
        <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Голосование за регионы
              </Typography>
              <Typography
                variant="small"
                className="flex items-center gap-1 font-normal text-blue-gray-600"
              >
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["Регион", "Количество голосов", "Процент голосов"].map(
                    (el) => (
                      <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-6 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-medium uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {projectsTableData.map(
                  ({ img, name, votes, percent }, key) => {
                    const className = `py-3 px-5 ${
                      key === projectsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar src={img} alt={name} size="sm" />
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {name}
                            </Typography>
                          </div>
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {votes}
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="w-10/12">
                            <Typography
                              variant="small"
                              className="mb-1 block text-xs font-medium text-blue-gray-600"
                            >
                              {percent}%
                            </Typography>
                            <Progress
                              value={percent}
                              variant="gradient"
                              color={"green"}
                              className="h-1"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>	
	)
}

export default AdminPanelPage
