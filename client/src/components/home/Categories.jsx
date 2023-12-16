import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
} from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { categories } from "../../constants/data";

const StyledTable = styled(Table)`
  border: 1px solid rgba(224, 224, 224, 1);
`;

const StyledButton = styled(Button)`
  margin: 20px;
  width: 80%;
  text-decoration: none;
  background: linear-gradient(to right, #6190e8, #a7bfe8);
  color: #fff;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Categories = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <>
      <Link
        to={`/blogs/create?category=${category || ""}`}
        style={{ textDecoration: "none" }}
      >
        <StyledButton variant="contained">Create Blog</StyledButton>
      </Link>

      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>
              <StyledLink to={"/blogs"}>All Categories</StyledLink>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
             <TableCell  
    variant="contained">
                <StyledLink to={`/blogs/?category=${category.type}`}>
                💅 {category.type}
                </StyledLink></TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default Categories;
