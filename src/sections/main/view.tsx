import {
  Card,
  CardHeader,
  IconButton,
  Unstable_Grid2 as Grid,
  TextField,
  Typography,
  Box,
  Tooltip,
} from "@mui/material";
import Iconify from "../../components/iconify";
import { useMediaQuery, useTheme } from "@mui/material";
import TodoCard from "../../components/todo-item";
import { NewEditTodoDialog } from "../../components/todo-dialog";
import { useEffect, useState } from "react";
import { useTodosContext } from "../../contexts/todos-context";

export default function View() {
  const theme = useTheme();
  const todosContext = useTodosContext();
  let [todos, setTodos] = useState(todosContext?.todos);
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("all");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filteredTodos = term
      ? todos.filter((todo) =>
          todo.title.toLowerCase().includes(term.toLowerCase())
        )
      : [];

    setTodos(filteredTodos);
  };
  const handleAddTodo = (item: { title: string; content: string }) => {
    todosContext?.addTodo(item?.title, item?.content);
    setIsDialogOpen(false);
  };
  useEffect(() => {
    const filteredTodos = searchTerm
      ? todosContext?.todos.filter((todo) =>
          todo.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : filterTerm === "all"
      ? todosContext?.todos
      : filterTerm === "completed"
      ? todosContext?.todos.filter((todo) => todo.completed)
      : todosContext?.todos.filter((todo) => !todo.completed);

    setTodos(filteredTodos);
    searchTerm ? setFilterTerm("all") : "";
  }, [todosContext?.todos, filterTerm, searchTerm]);

  return (
    <Grid container justifyContent="center" spacing={3}>
      <Grid xs={12}>
        <Card sx={{ px: 3, py: 2, my: 3, minHeight: 4, borderRadius: 9, }}>
          <CardHeader
            sx={{'.MuiCardHeader-action':{alignSelf:'unset'},textAlign: "center", display: 'flex', justifyContent:{xs:'center', md:'space-between'}, alignItems:{md:'center', xs:'space-between'}, flexDirection:{md:'row', xs:'column'} }}
            action={
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip
                  title="All todos"
                  placement="top"
                  arrow
                  onClick={() => setFilterTerm("all")}
                >
                  <IconButton
                    disabled={Boolean(searchTerm)}
                    size={isSmallScreen ? "medium" : "small"}
                  >
                    <Iconify
                      width={isSmallScreen ? 35 : 23}
                      color={Boolean(searchTerm) ? "grey.400" : "primary.main"}
                      icon="solar:list-bold-duotone"
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  title="Pending todos"
                  placement="top"
                  arrow
                  onClick={() => setFilterTerm("pending")}
                >
                  <IconButton
                    disabled={Boolean(searchTerm)}
                    size={isSmallScreen ? "medium" : "small"}
                  >
                    <Iconify
                      width={isSmallScreen ? 35 : 23}
                      color={Boolean(searchTerm) ? "grey.400" : "primary.main"}
                      icon="solar:pin-list-bold"
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  title="Completed todos"
                  placement="top"
                  arrow
                  onClick={() => setFilterTerm("completed")}
                >
                  <IconButton
                    disabled={Boolean(searchTerm)}
                    size={isSmallScreen ? "medium" : "small"}
                  >
                    <Iconify
                      width={isSmallScreen ? 35 : 23}
                      color={Boolean(searchTerm) ? "grey.400" : "primary.main"}
                      icon="solar:list-check-minimalistic-bold"
                    />
                  </IconButton>
                </Tooltip>
              </Box>
            }
            title={
              <Typography
                sx={{ml: {md:20, xs:0}, py:1}}
                color="primary.main"
                variant="h4"
              >
                {`Todo`}
              </Typography>
            }
          />
          <Box sx={{ textAlign: "center" }}>
            <TextField
              label="Search"
              name="searchTerm"
              onChange={handleSearch}
              value={searchTerm}
              fullWidth
              sx={{ mb: 3 }}
              InputProps={{ sx: { borderRadius: 7 } }}
              placeholder="todo title ..."
            />
            <Tooltip title="Add todo" placement="top" arrow>
              <IconButton size="large" onClick={() => setIsDialogOpen(true)}>
                <Iconify
                  width={35}
                  color="primary.main"
                  icon="solar:add-circle-linear"
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Card>
        {isDialogOpen && (
          <NewEditTodoDialog
            handleTodo={handleAddTodo}
            open={isDialogOpen}
            onClose={() => {
              setIsDialogOpen(false);
            }}
          />
        )}
      </Grid>
      {todos.map((todo) => (
        <Grid key={todo.id} xs={12}>
          <TodoCard todo={todo} />
        </Grid>
      ))}
    </Grid>
  );
}
