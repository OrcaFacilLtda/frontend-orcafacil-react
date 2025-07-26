import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 40px ;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const TitleSection = styled.div``;

const Title = styled.h2`
  margin: 0;
  font-weight: 700;
`;

const Subtitle = styled.p`
  margin: 4px 0 0 0;
  color: #555;
  font-size: 14px;
`;

const HeaderButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const RejectButton = styled.button`
  background-color: #e74c4c;
  color: white;
  border: none;
  padding: 8px 16px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
`;

const StatusBadge = styled.div`
  background-color: #f6a40a;
  color: white;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
`;

const Content = styled.div`
  display: flex;
  gap: 40px;
`;

const LeftPanel = styled.div`
  flex: 2;
  background: #f8fafc;
  border-radius: 10px;
  padding: 0px 30px;
`;

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
`;

const PersonInfo = styled.div`
  text-align: center;
`;

const PersonImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const PersonName = styled.h4`
  margin: 0;
`;

const PersonAddress = styled.p`
  font-size: 13px;
  color: #666;
  margin: 5px 0 15px 0;
`;

const ContactButton = styled.a`
  display: block;
  margin: 5px 0;
  background-color: ${({ phone }) => (phone ? "#2571ff" : "#d0d3d9")};
  color: ${({ phone }) => (phone ? "white" : "#444")};
  padding: 8px;
  border-radius: 6px;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: ${({ phone }) => (phone ? "#1a56d6" : "#c1c3c9")};
  }
`;

const ServiceDetails = styled.div`
  font-size: 14px;
  color: #444;
`;

const ServiceRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const ServiceLabel = styled.span`
  font-weight: 600;
  color: #666;
`;

const ServiceValue = styled.span`
  color: #333;
`;

const MaterialsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  font-weight: 600;
  border-bottom: 2px solid #ddd;
`;

const TableRow = styled.tr``;

const TableHeader = styled.th`
  text-align: left;
  padding: 8px;
  color: #555;
`;

const TableBody = styled.tbody``;

const TableData = styled.td`
  padding: 8px;
  border-bottom: 1px solid #eee;
  color: #444;
`;

export default {
    Container,
    Header,
    TitleSection,
    Title,
    Subtitle,
    HeaderButtons,
    RejectButton,
    StatusBadge,
    Content,
    LeftPanel,
    RightPanel,
    Card,
    PersonInfo,
    PersonImage,
    PersonName,
    PersonAddress,
    ContactButton,
    ServiceDetails,
    ServiceRow,
    ServiceLabel,
    ServiceValue,
    MaterialsTable,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableData,
};
