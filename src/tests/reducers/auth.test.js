import authReducer from "../../redux/reducers/auth.reducer";

test("should set uid for login", () => {
	const action = {
		type: "LOGIN",
		uid: "123a",
	};

	const state = authReducer({}, action);
	expect(state.uid).toBe(action.uid);
});

test("should clear uid for logout", () => {
	const action = {
		type: "LOGOUT",
	};

	const state = authReducer({ uid: "anything" }, action);
	expect(state).toEqual({});
});
