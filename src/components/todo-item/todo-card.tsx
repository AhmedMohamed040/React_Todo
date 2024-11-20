import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Checkbox,
  Popover,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import Iconify from "../iconify";
import { useCallback, useState } from "react";
import { TodoItem } from "../../types/todo";
import { NewEditTodoDialog, ViewTodoDialog } from "../todo-dialog";
import { ConfirmDialog } from "../custom-dialog";
import { useTodosContext } from "../../contexts/todos-context";

interface TodoCardProps {
  todoItem: TodoItem;
}
const TodoCard = function ({ todoItem }: TodoCardProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDialogViewOpen, setIsDialogViewOpen] = useState(false);
  const [choosenTodo, setChoosenTodo] = useState<TodoItem | undefined>(
    undefined
  );
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const [deleteItemId, setDeleteItemId] = useState("");
  const todosContext = useTodosContext();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEdit = () => {
    setChoosenTodo(todoItem);
    setIsDialogOpen(true);
  };
  const handleViewDetails = () => {
    setChoosenTodo(todoItem);
    setIsDialogViewOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleEditTodo = (item: { title: string; content: string }) => {
    todosContext?.editTodo(todoItem?.id, item?.title, item?.content);
    setIsDialogOpen(false);
  };
  const handleToggleTodo = () => {
    todosContext?.toggleComplete(todoItem?.id);
  };
  const handleConfirmDelete = useCallback(() => {
    todosContext?.removeTodo(todoItem?.id);
  }, [deleteItemId]);
  return (
    <Card sx={{ borderRadius: 9, borderTopLeftRadius: 0, px: 3 }}>
      <CardHeader
        action={
          <Box
            sx={{
              mx: 2,
              posotion: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Checkbox
              value={todoItem?.completed}
              onChange={handleToggleTodo}
              color={todoItem?.completed ? "secondary" : "primary"}
              sx={{ position: "absolute", transform: "translate(0%,-4%)" }}
              size="large"
            />
            <IconButton
              disabled={todoItem?.completed && true}
              aria-describedby={id}
              onClick={handleClick}
              sx={{
                gap: 1,
                display: "flex",
                alignItems: "center",
                position: "absolute",
                transform: "translate(4%,100%)",
              }}
            >
              <Iconify
                width={30}
                color={todoItem?.completed ? "grey.300" : "primary.dark"}
                icon="solar:menu-dots-bold"
              />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Tooltip title="Delete" placement="bottom" arrow>
                <IconButton
                  size="large"
                  onClick={() => setDeleteItemId(todoItem?.id)}
                >
                  <Iconify
                    width={20}
                    color="error.dark"
                    icon="solar:notification-lines-remove-linear"
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Edit" placement="bottom" arrow>
                <IconButton size="large" onClick={handleEdit}>
                  <Iconify
                    width={20}
                    color="warning.dark"
                    icon="solar:document-add-outline"
                  />
                </IconButton>
              </Tooltip>

              <Tooltip title="View details" placement="bottom" arrow>
                <IconButton size="large" onClick={handleViewDetails}>
                  <Iconify
                    width={20}
                    color="primary.dark"
                    icon="solar:document-text-outline"
                  />
                </IconButton>
              </Tooltip>
            </Popover>
          </Box>
        }
        title={
          <Typography
            variant="h6"
            color={todoItem?.completed ? "grey.500" : "primary.main"}
          >
            {todoItem?.title}
          </Typography>
        }
      />
      <CardContent sx={{ py: 0 }}>
        <Typography
          sx={{
            color: todoItem?.completed ? "grey.400" : "primary.light",
            textDecorationLine: todoItem?.completed ? "line-through" : "none",
            textDecorationThickness: "0.2rem",
            display: "-webkit-box",
            WebkitLineClamp: "1",
            width: "calc(100% - 51px)",
            WebBoxOrient: "vertical",
            overflow: "hidden",
          }}
          variant="body1"
        >
          {todoItem?.content}
        </Typography>
      </CardContent>
      {deleteItemId && (
        <ConfirmDialog
          open={!!deleteItemId}
          onClose={() => setDeleteItemId("")}
          title="Delete"
          content="Are you sure you want to delete this todo?"
          handleConfirmDelete={handleConfirmDelete}
        />
      )}
      {isDialogOpen && (
        <NewEditTodoDialog
          handleTodo={handleEditTodo}
          open={isDialogOpen}
          onClose={() => {
            setIsDialogOpen(false);
            setChoosenTodo(undefined);
          }}
          todo={choosenTodo}
        />
      )}
      {isDialogViewOpen && (
        <ViewTodoDialog
          open={isDialogViewOpen}
          onClose={() => {
            setIsDialogViewOpen(false);
          }}
          todo={todoItem}
        />
      )}
    </Card>
  );
};
export default TodoCard;
