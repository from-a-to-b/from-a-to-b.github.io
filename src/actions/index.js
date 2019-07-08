export const windowResize = (dimension) => {
  return {
    type: 'WINDOW_RESIZE',
    payload: {
      windowWidth: dimension.width,
      windowHeight: dimension.height
    }
  }
}

export const changeSpeculativeTripID = (speculativeTripID) => {
  return {
    type: 'CHANGE_SPECULATIVE_TRIP_ID',
    payload: {
      speculativeTripID: speculativeTripID
    }
  }
}

export const changeDataStatus = (dataStatus) => {
  return {
    type: 'CHANGE_DATA_STATUS',
    payload: {
      dataStatus: dataStatus
    }
  }
}

export const changeData = (data) => {
  return {
    type: 'CHANGE_DATA',
    payload: {
      data: data
    }
  }
}


export const changeCurrentIdx = (currentIdx) => {
  return {
    type: 'CHANGE_CURRENT_IDX',
    payload: {
      currentIdx: currentIdx
    }
  }
}