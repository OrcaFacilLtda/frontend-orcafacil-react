import styled from "styled-components";

const Container = styled.div`
    background: #f9fafb;
    min-height: 95vh;
    padding: 24px;
    box-sizing: border-box;
`;

const Header = styled.div`
    margin-bottom: 24px;

    h2 {
        margin: 0 0 4px;
        font-weight: 800;
        font-size: 24px;
        color: #111827;
    }

    p {
        margin: 0;
        color: #6b7280;
        font-size: 16px;
    }
`;

const SummaryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 16px;
    margin-bottom: 40px;
`;

const SummaryItem = styled.div`
    background: white;
    padding: 0px 12px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const SummaryIcon = styled.div`
    background-color: ${({ color }) => color || "#ccc"};
    padding: 6px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    color: white; 
`;

const SummaryTitle = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: #6b7280;
`;

const SummaryValue = styled.p`
    font-size: 26px;
    font-weight: bold;
    color: #111827;
`;

const RecentArea = styled.div`
    margin-top: 32px;
`;

const RecentTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 16px;
`;

const FilterBox = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1 1 200px;
    padding: 8px 12px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 14px;

    &:focus {
        outline: none;
        border-color: #2563eb;
        box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.3);
    }
`;

const Select = styled.select`
    flex: 1 1 180px;
    padding: 8px 12px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 14px;
    background-color: white;
    color: #374151;

    &:focus {
        outline: none;
        border-color: #2563eb;
        box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.3);
    }
`;

const FilterButton = styled.button`
    background-color: #2563eb;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        background-color: #1e40af;
    }
`;

const ServiceList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const ServiceItem = styled.li`
    background: white;
    padding: 16px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Avatar = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 16px;
`;

const ServiceInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const ClientName = styled.p`
  font-weight: 600;
  color: #111827;
`;

const ServiceName = styled.p`
  font-size: 14px;
  color: #6b7280;
`;

const ServiceTime = styled.span`
  font-size: 12px;
  color: #9ca3af;
`;

const ViewButton = styled.button`
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #1e40af;
  }
`;

const HireButton = styled.button`
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const DashboardService = {
    Container,
    Header,
    SummaryGrid,
    SummaryItem,
    TextContainer,
    SummaryIcon,
    SummaryTitle,
    SummaryValue,
    RecentArea,
    RecentTitle,
    FilterBox,
    Input,
    Select,
    FilterButton,
    ServiceList,
    ServiceItem,
    Avatar,
    ServiceInfo,
    ClientName,
    ServiceName,
    ServiceTime,
    ViewButton,
    HireButton,
};

export default DashboardService;
