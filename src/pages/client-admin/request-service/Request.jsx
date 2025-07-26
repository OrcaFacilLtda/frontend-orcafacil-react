import {
    faFileAlt,
    faThumbsUp,
    faHourglassHalf,
    faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const summaryData = [
    {
        title: "Novos Pedidos",
        value: 12,
        icon: <FontAwesomeIcon icon={faFileAlt} />,
        color: "#DBEAFE",
    },
    {
        title: "Aceitos Hoje",
        value: 8,
        icon: <FontAwesomeIcon icon={faThumbsUp} />,
        color: "#dbf9eb",
    },
    {
        title: "Pendentes",
        value: 4,
        icon: <FontAwesomeIcon icon={faHourglassHalf} />,
        color: "#fff5db",
    },
    {
        title: "Taxa Aceitação",
        value: "85%",
        icon: <FontAwesomeIcon icon={faChartLine} />,
        color: "#f4e8ff",
    },
];

export const recentServices = [
    {
        client: "Maria Santos",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        service: "Instalação Elétrica",
        time: "Há 2 horas",
    },
    {
        client: "Carlos Oliveira",
        avatar: "https://randomuser.me/api/portraits/men/56.jpg",
        service: "Reparo de Tomadas",
        time: "Há 4 horas",
    },
];

export const allProviders = [
    {
        id: 1,
        name: "João Eletricista",
        category: "Elétrica",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
        id: 2,
        name: "Ana Limpeza",
        category: "Limpeza",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    {
        id: 3,
        name: "Pedro Pintor",
        category: "Pintura",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg"
    }
];
